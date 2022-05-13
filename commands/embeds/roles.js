
const { Message, Client, MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageSelectMenu } = require('discord.js')

module.exports = {
    name: "roles",
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

        const row2 = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId("pronounSelect")
            .setPlaceholder("Select your pronouns")
            .setMinValues(0)
            .setMaxValues(6)
            .addOptions([
            {
                label:"He/Him",
                value:"HeHim",
            },
            {
                label:"He/They",
                value:"HeThey",

            },
            {
                label:"She/Her",
                value:"SheHer",
            },
            {
                label:"She/They",
                value:"SheThey",
            },
            {
                label:"They/Them",
                value:"TheyThem",
            },
            {
                label:"Any Pronouns",
                value:"Any",
            },
            {
                label:"Ask My Pronouns",
                value:"Ask",
            },
        ])
        )

        const row3 = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId("bcsSelect")
            .setPlaceholder("Select your pronouns")
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

        const row4 = new MessageActionRow()
        .addComponents(
            new MessageSelectMenu()
            .setCustomId("miscSelect")
            .setPlaceholder("Select your misc roles")
            .setMinValues(0)
            .addOptions([
            {
                label:"Course Rep",
                description:"Get access to the course rep channel",
                value:"courserep",
            },
            {
                label:"CourseWork Help Ping",
                description:"If you want to help out within our coursework-help channel",
                value:"ACWPing",

            },
        ])
        )



        message.channel.send({content: "Select your roles.", components:[row1]})
        message.channel.send({content: "Select your pronouns.", components:[row2]})
        message.channel.send({content: "Select your BCS status", components:[row3]})
        message.channel.send({content: "Select your Misc role", components:[row4]})


    },
};