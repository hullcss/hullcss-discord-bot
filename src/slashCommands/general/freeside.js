const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'freeside',
	description: 'returns freeside discord link',
	type: ApplicationCommandType.ChatInput,
	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setTitle('Freeside')
			.setColor(0xe06d44)
			.setFooter({ text: `Called By: ${interaction.user.tag}` })
			.setDescription(
				'Freeside is the student run and maintained linux cluster within the University Of Hull Computer Science Department providing Linux administration experience, mentoring and technical advice alongside other peer-led support. It is completely free to all students to join, irrespective of degree pathway.'
			)
			.addFields({
				name: 'You can join them from below!',
				value: 'https://discord.freeside.co.uk',
			});
		interaction.reply({ embeds: [embed] });
	},
};
