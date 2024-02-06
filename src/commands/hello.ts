import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
    .setName('hello')
    .setDescription('Replies with a Hello World embed');

export async function execute(interaction: CommandInteraction) {
    const embed = new EmbedBuilder()
        .setColor('#0099ff') // Set the color of the embed
        .setTitle('Hello World') // Set the title of the embed
        .setDescription('Hello from TeaClient To the World!')
        .setURL("https://teaclient.net");

    await interaction.reply({ embeds: [embed] });
}