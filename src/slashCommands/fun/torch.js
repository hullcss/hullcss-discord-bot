module.exports = {
	name: 'lampadaferens',
	description: 'Hull University',
	type: 'CHAT_INPUT',
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
