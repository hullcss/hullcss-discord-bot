const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	...new SlashCommandBuilder()
		.setName('hourstoseconds')
		.setDescription('Make the poll command easier')
		.addIntegerOption((option) =>
			option
				.setName('hours')
				.setDescription('The duration of the poll *Time is in seconds*')
				.setRequired(true)
		),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */

	run: async (client, interaction) => {
		const hours = interaction.options.getInteger('hours');
		const hoursParsed = Number(hours);

		const seconds = hoursParsed * 3600;
		const secondsParsed = seconds.toString();

		interaction.reply({
			content: `${hours} hours is ${secondsParsed} seconds`,
			ephemeral: true,
		});
	},
};
