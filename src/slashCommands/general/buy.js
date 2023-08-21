const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'buy',
	description: 'returns membership purchase link',
	type: ApplicationCommandType.ChatInput,
	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setTitle('Thanks for considering to become a paid member!')
			.setColor(0x3FB618)
			.setFooter({ text: `Called By: ${interaction.user.tag}` })
			.addFields(
				{name: 'You can purchase from below!', value: 'https://hulluniunion.com/shop?aid=304'}
			);
		interaction.reply({ embeds: [embed] });
	},
};
