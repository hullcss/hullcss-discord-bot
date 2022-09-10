const {
	MessageEmbed,
	MessageActionRow,
	MessageButton,
	Permissions,
} = require('discord.js');

module.exports = {
	name: 'paidmember',
	aliases: [''],
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 * @param {String[]} args
	 */
	run: async (client, message) => {
		if (
			!message.member.permissions.has(
				Permissions.FLAGS.BAN_MEMBERS,
				Permissions.FLAGS.ADMINISTRATOR
			)
		)
			return message.channel.send(
				"You don't have permission to use that command."
			);

		const embed = new MessageEmbed()
			.setColor('GREEN')
			.setFooter({ text: `Called By: ${message.author.tag}` })
			.setTimestamp()
			.setTitle('Paid Member!')
			.setDescription(
				`Press the button below to get access to the paid member role.`
			)
			.addField(
				'Benefits?',
				'Come to every event\r\n Vote in AGMs and EGMs\r\n Access a special area, just for paid members\r\n Access our archive of previous events and guest talks\r\n\r\nAnd support the society you are apart of!'
			)
			.addField('Pay for a membership', 'Press the grey button below!')
			.setThumbnail('https://i.imgur.com/ww6wKwJ.png');

		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setURL('https://hulluniunion.com/shop?aid=304')
					.setEmoji('')
					.setLabel('Pay for a membership!')
					.setStyle('LINK')
			)
			.addComponents(
				new MessageButton()
					.setCustomId('paidModal')
					.setLabel('Paid Member Request')
					.setStyle('PRIMARY')
			);
		message.channel.send({ embeds: [embed], components: [row] });
	},
};
