const { Message, Client, MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageSelectMenu } = require('discord.js')

module.exports = {
    name: "bcs",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const row3 = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId("bcsSelect")
            .setPlaceholder("Select your BCS Status")
            .addOptions([
            {
                label:"Student Member",
                value:"bcsStudent",
            },
            {
                label:"Associate Member",
                value:"bcsAss",

            },
            {
                label:"Proffesional Member",
                value:"bcsProf",
            },
            {
                label:"Fellow",
                value:"bcsFellow",
            },
        ])
        )

        message.channel.send({content: "Select your BCS status", components:[row3]})

    }
}