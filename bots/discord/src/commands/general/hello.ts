import { type CommandInteraction, SlashCommandBuilder } from "discord.js";
import type { SlashCommand } from "../../@types/index";

export const command: SlashCommand = {
	data: new SlashCommandBuilder().setName("hello").setDescription("Says Hello"),
	async execute(interaction: CommandInteraction) {
		const user = interaction.user;
		await interaction.reply(
			`Hello ${user} I am the new TeaClient Discord Bot!`,
		);
	},
};
