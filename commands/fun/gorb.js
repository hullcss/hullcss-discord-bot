const discord = require("discord.js");

module.exports = {
    name: "gorb",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        message.channel.send({ files: ['./images/gorb.jpg'] })
    },
};