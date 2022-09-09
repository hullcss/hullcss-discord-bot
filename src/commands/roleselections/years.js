const { Message, Client, MessageActionRow, MessageSelectMenu } = require("discord.js");

module.exports = {
    name: "years",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const row1 = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId("yearSelect")
            .setPlaceholder("Select your current year")
            .addOptions([
            {
                label:"Foundation",
                value:"0",
            },
            {
                label:"First Year",
                value:"1",

            },
            {
                label:"Second Year",
                value:"2",
            },
            {
                label:"Year In Industry",
                value:"3",
            },
            {
                label:"Third Year",
                value:"4",
            },
            {
                label:"Masters",
                value:"5",
            },
            {
                label:"PhD",
                value:"6",
            },
            {
                label:"Graduate",
                value:"7",
            },
        ])
        )
        message.channel.send({content: "Select your year.", components:[row1]})

    }
}