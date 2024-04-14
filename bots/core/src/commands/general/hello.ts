import { type CommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
	data: new SlashCommandBuilder().setName("hello").setDescription("Says Hello"),
	async execute(interaction: CommandInteraction) {
		const user = interaction.user;
		await interaction.reply(`Hello ${user}!`);
	},
};
