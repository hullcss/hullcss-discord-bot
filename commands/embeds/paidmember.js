const discord = require("discord.js");
const { Modal } = require('discord-modals') // Modal class

module.exports = {
    name: "welcome",
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
                .setURL('https://github.com/hullcss/conduct/')
                .setEmoji('')
                .setLabel('Code of Conduct')
                .setStyle('LINK')
            )
        message.channel.send({ embeds: [embed], components: [row] })
    },
};