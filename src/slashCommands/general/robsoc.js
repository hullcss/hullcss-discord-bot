const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'robsoc',
	description: 'returns robotics society discord link',
	type: 'CHAT_INPUT',
	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (client, interaction) => {
		const embed = new MessageEmbed()
			.setTitle('Robotics Society')
			.setColor('BLUE')
			.setFooter({ text: `Called By: ${interaction.user.tag}` })
			.setDescription(
				'Robotics Society are a society where you can gain skills in building an actual robot, or get help with your assignments or exams, but they also run social nights where they go out to do stuff.'
			)
			.addField(
				'You can join them from below!',
				'https://discord.gg/cMP5CavnK4'
			);
		interaction.reply({ embeds: [embed] });
	},
};
