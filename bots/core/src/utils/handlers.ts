import fs from "node:fs";
import path from "node:path";
import { type Client, REST, Routes, SlashCommandBuilder } from "discord.js";

interface LoadCommandsParams {
	mainFolder: string;
	client: Client;
	guildID: string;
	token: string;
	clientID: string;
}

export async function LoadCommands({
	mainFolder,
	token,
	clientID,
	client,
	guildID,
}: LoadCommandsParams) {
	const commands: JSON[] = [];
	const commandFolders = fs.readdirSync(mainFolder);

	for (const folder of commandFolders) {
		// Grab all the command files from the commands directory you created earlier
		const commandsPath = path.join(mainFolder, folder);
		const commandFiles = fs
			.readdirSync(commandsPath)
			.filter((file) => file.endsWith(".js") || file.endsWith(".ts"));
		// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);
			const command = require(filePath).default;
			// console.log(command);
			if ("data" in command && "execute" in command) {
				// console.log(command.data);
				commands.push(command.data.toJSON());
			} else {
				console.log(
					`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
				);
			}
		}
	}

	const rest = new REST().setToken(token);

	try {
		console.log(
			`Started refreshing ${commands.length} application (/) commands.`,
		);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientID, guildID),
			{ body: commands },
		);
		console.log(data);

		console.log(
			`Successfully reloaded ${
				(data as string[]).length
			} application (/) commands.`,
		);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
}

export function EventsHandler(folder: string) {}
