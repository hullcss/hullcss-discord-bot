const { ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'lampadaferens',
	description: 'Hull University',
	type: ApplicationCommandType.ChatInput,
	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (client, interaction) => {
		interaction.reply({
			files: [
				'https://c.tenor.com/N8A8lQ3g0YIAAAAd/chaseatlanticgifs-sarahmcfadyen.gif',
			],
		});
	},
};
