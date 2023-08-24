const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	EmbedBuilder,
	ActionRowBuilder,
	ButtonBuilder,
} = require('discord.js');

module.exports = {
	...new SlashCommandBuilder()
		.setName('paidmemberembed')
		.setDescription('Create the paid member embed')
		.setDefaultMemberPermissions(
			PermissionFlagsBits.Administrator
		),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */

	run: async (client, interaction) => {
		const embed = new EmbedBuilder()
			.setColor(0x3fb618)
			.setFooter({ text: `Called By: ${interaction.user.tag}` })
			.setTimestamp()
			.setTitle('Paid Member!')
			.setDescription(
				`Press the button below to get access to the paid member role.`
			)
			.addFields(
				{
					name: 'Benefits?',
					value:
						'Come to every event\r\n Vote in AGMs and EGMs\r\n Access a special area, just for paid members\r\n Access our archive of previous events and guest talks\r\nAnd support the society you are apart of!',
				},
				{
					name: 'Disclaimer!',
					value:
						'This is a manual process, executive members need to verify that you have paid your membership and then manually give you the role. **There is no notification of you receiving the role!**',
				},
				{
					name: 'Pay for a membership',
					value: 'Press the green button below!',
				}
			)
			.setThumbnail('https://i.imgur.com/ww6wKwJ.png')
			.setImage(`https://i.imgur.com/ro0U7LG.png?2048`);

		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setURL('https://hulluniunion.com/shop?aid=304')
					.setLabel('Pay for a membership!')
					.setStyle('Link')
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('paidModal')
					.setLabel('Paid Member Request')
					.setStyle('Primary')
			);

		interaction.channel.send({ embeds: [embed], components: [row] });
		interaction.reply({ content: 'Embed sent.', ephemeral: true });
	},
};
