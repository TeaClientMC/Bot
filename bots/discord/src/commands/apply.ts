import {
	type ChatInputCommandInteraction,
	type Client,
	SlashCommandBuilder,
} from "discord.js";
import type { SlashCommand } from "../@types";

export const command: SlashCommand = {
	data: new SlashCommandBuilder()
		.setName("apply")
		.setDescription("Apply")
		.addStringOption((option) =>
			option
				.setName("Team")
				.setDescription("Selector of what team you want to join")
				.addChoices([
					{
						name: "Maintainer Team",
						value: "maintain",
					},
					{
						name: "Staff Team",
						value: "staff",
					},
				])
				.setRequired(true),
		)
		.setDMPermission(true),
	async execute(client: Client, interaction: ChatInputCommandInteraction) {
		interaction.user.dmChannel?.send("Application Created Note: This is Buggy");
		// TODO: Command for applying at TeaClient
	},
};
