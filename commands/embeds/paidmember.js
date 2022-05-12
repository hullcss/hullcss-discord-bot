const discord = require("discord.js");
const {  Modal, TextInputComponent, showModal } = require('discord-modals') // Modal class

module.exports = {
    name: "paidmember",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
            const embed = new discord.MessageEmbed()
            .setColor('GREEN')
            .setFooter(`Called By: ${message.author.tag}`)
            .setTimestamp()
            .setTitle("Paid Member!")
            .setDescription(`Press the button below to get access to the paid member role.`)
            .addField('Benefits?', 'Come to every event\r\n Vote in AGMs and EGMs\r\n Access a special area, just for paid members\r\n Access our archive of previous events and guest talks\r\n\r\nAnd support the society you are apart of!')
            .addField('Pay for a membership', 'Press the grey button below!')
            .setThumbnail('https://i.imgur.com/ww6wKwJ.png')


            const row = new discord.MessageActionRow()
            .addComponents(
                new discord.MessageButton()
                .setURL('https://hulluniunion.com/shop?aid=304')
                .setEmoji('')
                .setLabel('Pay for a membership!')
                .setStyle('LINK')
            )
			.addComponents(
                new discord.MessageButton()
                .setCustomId('paidModal')
                .setLabel('Paid Member Request')
                .setStyle('PRIMARY')
            )
        message.channel.send({ embeds: [embed], components: [row] })
    },
};