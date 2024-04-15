import fs from "node:fs";
import path from "node:path";
import { Glob } from "bun";
import { type Client, REST, Routes, SlashCommandBuilder } from "discord.js";

export async function LoadCommands(
	token: string,
	clientID: string,
	client: Client,
	guildID: string,
	mainFolder: string,
) {
	const commands: JSON[] = [];
	const folderLocation = `${mainFolder}/**/*.{js,ts}`;
	const glob = new Glob(folderLocation);

	for (const file of glob.scanSync(".")) {
		const command = require(file);
		if ("data" in command && "execute" in command) {
			console.log(command.data);
			commands.push(command.data.toJSON());
		} else {
			console.log(
				`[WARNING] The command at ${command} is missing a required "data" or "execute" property.`,
			);
		}
	}

	const rest = new REST().setToken(token);

	// try {
	// 	console.log(
	// 		`Started refreshing ${commands.length} application (/) commands.`,
	// 	);

	// 	// The put method is used to fully refresh all commands in the guild with the current set
	// 	const data = await rest.put(
	// 		Routes.applicationGuildCommands(clientID, guildID),
	// 		{ body: commands },
	// 	);
	// 	console.log(data);

	// 	console.log(
	// 		`Successfully reloaded ${
	// 			(data as string[]).length
	// 		} application (/) commands.`,
	// 	);
	// } catch (error) {
	// 	// And of course, make sure you catch and log any errors!
	// 	console.error(error);
	// }
}

export function EventsHandler(folder: string) {}
