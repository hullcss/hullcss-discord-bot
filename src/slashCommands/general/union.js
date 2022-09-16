const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	...new SlashCommandBuilder()
		.setName('union')
		.setDescription('Output various union links')
		.addStringOption((option) =>
			option
				.setName('link')
				.setDescription('Specific link')
				.addChoices(
					{ name: 'Events', value: 'events' },
					{ name: 'Academic Reps', value: 'reps' },
					{ name: 'App', value: 'app' }
				)
		),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */

	run: async (client, interaction) => {
		const link = interaction.options.getString('link');

		if (link == null) {
			await interaction.reply('https://hulluniunion.com/');
		}

		if (link == 'events') {
			await interaction.reply('https://hulluniunion.com/events');
		}

		if (link == 'reps') {
			await interaction.reply(
				'https://hulluniunion.com/change-things/academic-reps'
			);
		}

		if (link == 'app') {
			await interaction.reply(
				'Apple: https://apps.apple.com/gb/app/students-union/id1549685999\r\nAndroid: https://play.google.com/store/apps/details?id=com.studentsunionapp'
			);
		}
	},
};
