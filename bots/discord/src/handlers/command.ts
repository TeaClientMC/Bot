import { readdirSync } from "node:fs";
import { join } from "node:path";
import { type Client, REST, Routes, SlashCommandBuilder } from "discord.js";
import type { Handler, SlashCommand } from "../@types";

const handler: Handler = {
	name: "CommandHandler",
	execute(client: Client<true>) {
		const foldersPath = join(__dirname, "../commands");
		const commandFolders = readdirSync(foldersPath);

		const commands = [];

		for (const folder of commandFolders) {
			const commandsPath = join(foldersPath, folder);
			const commandFiles = readdirSync(commandsPath).filter((file) =>
				file.endsWith(".ts"),
			);
			for (const file of commandFiles) {
				const filePath = join(commandsPath, file);
				const command = require(filePath);
				if ("data" in command && "execute" in command) {
					console.log(`Loaded the command ${file}.`);
					commands.push(command.data.toJSON());
					client.commands.set(command.data.name, command);
				} else {
					console.error(`Can't load the command ${file}.`);
				}
			}
			console.log(`Loaded ${commands.length} commands.`);
		}

		const rest = new REST().setToken(process.env.token || "");

		// Deploy commands
		(async () => {
			try {
				console.log(`Trying to refresh ${commands.length} slashCommands.`);
				const data: string[] = await rest.put(
					Routes.applicationCommands(process.env.client_id || ""),
					{
						body: commands,
					},
				);

				console.log(`Loaded ${data.length} slashCommands.`);
			} catch (error) {
				console.error(error);
			}
		})();
	},
};

export default handler;
