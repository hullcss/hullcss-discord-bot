const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'links',
	description: 'returns links of HullCSS',
	type: ApplicationCommandType.ChatInput,
	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setTitle('Links!')
			.setColor(0x3FB618)
			.setFooter({ text: `Called By: ${interaction.user.tag}` })
			.addFields({name: 'Find us here:', value: 'https://hullcss.org'});
		interaction.reply({ embeds: [embed] });
	},
};
