import { type Client, Events, type Interaction } from "discord.js";

type ExtendClient = Client & {};

// Extend the Client class
type ExtendInteraction = Interaction & {
	client: Client;
};

export default {
	name: Events.InteractionCreate,
	async execute(interaction: ExtendInteraction) {
		if (!interaction.isChatInputCommand() && !interaction.isCommand) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(
				`No command matching ${interaction.commandName} was found.`,
			);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({
					content: "There was an error while executing this command!",
					ephemeral: true,
				});
			} else {
				await interaction.reply({
					content: "There was an error while executing this command!",
					ephemeral: true,
				});
			}
		}
	},
};
