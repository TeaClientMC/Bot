import path from "node:path";
import { Client, Events, GatewayIntentBits, Partials } from "discord.js";
import { z } from "zod";
import { LoadCommands } from "./utils/handlers";

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
	partials: [Partials.Message, Partials.GuildMember],
});

client.once(Events.ClientReady, (readyClient) => {
	console.log("Bot is ready!");
});

export const envSchema = z.object({
	Token: z.string(),
	AppID: z.string(),
	ClientSecret: z.string(),
	MainDC: z.string(),
	TeamDC: z.string().optional(),
	StaffDC: z.string().optional(),
	GeneralLogs: z.string().optional(),
	PunishmentLogs: z.string().optional(),
});

type EnvType = z.infer<typeof envSchema>;

const env = envSchema.parse(process.env);

if (!env) {
	console.error("Parsing Env Failed");
}

if (!env.Token && !env.AppID && !env.ClientSecret && !env.MainDC)
	console.error(
		"Please Specify the Bot Requirements in /bots/core/.env you can also find and example in the folder.",
	);

LoadCommands({
	mainFolder: path.join(__dirname, "commands"),
	token: env.Token,
	clientID: env.AppID,
	client: client,
	guildID: env.TeamDC ?? env.MainDC,
});

client.login(env.Token);
