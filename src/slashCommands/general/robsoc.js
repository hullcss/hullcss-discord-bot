const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
	name: 'robsoc',
	description: 'returns robotics society discord link',
	type: ApplicationCommandType.ChatInput,
	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */
	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setTitle('Robotics Society')
			.setColor(0x44468b)
			.setFooter({ text: `Called By: ${interaction.user.tag}` })
			.setDescription(
				'Robotics Society are a society where you can gain skills in building an actual robot, or get help with your assignments or exams, but they also run social nights where they go out to do stuff.'
			)
			.addFields({
				name: 'You can join them from below!',
				value: 'https://discord.gg/cMP5CavnK4'
			});
		interaction.reply({ embeds: [embed] });
	},
};
