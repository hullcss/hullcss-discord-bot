const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	name: 'welcome',
	aliases: [''],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message) => {
		const embed = new MessageEmbed()
			.setColor('GREEN')
			.setFooter({ text: `Called By: ${message.author.tag}` })
			.setTimestamp()
			.setTitle('Welcome!')
			.setDescription(
				`We're the official student-run Computer Science Society at Hull, set up with the aim of providing engaging events for students with an interest in Computer Science. This basically means our role is to make life outside of your course as fun and interesting as possible, organising both social and technical events for you.`
			)
			.setThumbnail('https://i.imgur.com/ww6wKwJ.png')
			.addField(
				'Exec Members',
				`President - <@261607869068214272>.\r\nSecretary - <@265925073926488064>.\r\nTreasurer - <@354324259629170700>.\r\nSocial Secretary - NA.\r\n Publicity Officer - <@328928794364870656>.\r\nWebmaster - <@449573875743981569>.\r\n\r\n\r\n`
			)
			.addField('Our Site', `https://hullcss.org/`)
			.addField(
				'Gain Access',
				`To gain access to the server, you will need to have a read of the code of conduct, found here: https://github.com/hullcss/conduct/ and react to the check mark below.\r\n \r\n **All Members, including Community are required to read this policy to access the server.**`
			)
			.addField(
				'Confirmation',
				'By reacting with the check mark, you confirm that you have read the #hullcss Code of Conduct'
			);

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://github.com/hullcss/conduct/')
					.setEmoji('')
					.setLabel('Code of Conduct')
					.setStyle('LINK')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('codeOfConduct')
					.setEmoji('✅')
					.setLabel(' I have read the code of conduct!')
					.setStyle('SUCCESS')
			);

		message.channel.send({ embeds: [embed], components: [row] });
	},
};
