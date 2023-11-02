const {
	SlashCommandBuilder,
	PermissionFlagsBits,
	EmbedBuilder,
	ActionRowBuilder,
	ButtonBuilder,
} = require('discord.js');

module.exports = {
	...new SlashCommandBuilder()
		.setName('welcomemebed')
		.setDescription('Create the welcome embed')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

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
			.setTitle('Welcome!')
			.setDescription(
				`We're the official student-run Computer Science Society at Hull, set up with the aim of providing engaging events for students with an interest in Computer Science. This basically means our role is to make life outside of your course as fun and interesting as possible, organising both social and technical events for you.`
			)
			.setThumbnail('https://i.imgur.com/ww6wKwJ.png')
			.addFields(
				{
					name: 'Exec Members',
					value: `President - <@867382918883180554>.\r\nSecretary - <@257938317243449346>.\r\nTreasurer - <@465912244404879361>.\r\nSocial Secretary - <@772513928160084009>.\r\nWebmaster - <@609463800818827264>.\r\n\r\n\r\n`,
				},
				{
					name: 'Our Site',
					value: 'https://hullcss.org/',
				},
				{
					name: 'Gain Access',
					value: `To gain access to the server, you will need to have a read of the code of conduct, found [here](https://github.com/hullcss/.github/blob/main/CODE_OF_CONDUCT.md) and react to the check mark below.\r\n \r\n **All Members, including Community are required to read this policy to access the server.**`,
				},
				{
					name: 'Confirmation',
					value:
						'By reacting with the check mark, you confirm that you have read the #hullcss Code of Conduct',
				}
			);

		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setURL('https://github.com/hullcss/.github/blob/main/CODE_OF_CONDUCT.md')
					.setLabel('Code of Conduct')
					.setStyle('Link')
			)
			.addComponents(
				new ButtonBuilder()
					.setCustomId('codeOfConduct')
					.setEmoji('✅')
					.setLabel(' I have read the code of conduct!')
					.setStyle('Success')
			);

		interaction.channel.send({ embeds: [embed], components: [row] });
		interaction.reply({ content: 'Embed sent.', ephemeral: true });
	},
};
