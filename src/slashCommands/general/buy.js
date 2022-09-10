const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'buy',
	description: 'returns membership purchase link',
	type: 'CHAT_INPUT',
	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (client, interaction) => {
		const embed = new MessageEmbed()
			.setTitle('Thanks for considering to become a paid member!')
			.setColor('GREEN')
			.setFooter({ text: `Called By: ${interaction.user.tag}` })
			.addField(
				'You can purchase from below!',
				'https://hulluniunion.com/shop?aid=304'
			);
		interaction.reply({ embeds: [embed] });
	},
};
