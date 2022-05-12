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
            .setThumbnail('https://i.imgur.com/ww6wKwJ.png')


            const row = new discord.MessageActionRow()
			.addComponents(
                new discord.MessageButton()
                .setCustomId('paidModal')
                .setEmoji('💲')
                .setLabel('Code of Conduct')
                .setStyle('PRIMARY')
            )
        message.channel.send({ embeds: [embed], components: [row] })
    },
};