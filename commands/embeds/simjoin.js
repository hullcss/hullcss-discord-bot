const discord = require("discord.js");
const { emit } = require("../..");

module.exports = {
    name: "simjoin",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        client,emit('guildMemberAdd', guildmember)
        return `Join Simulated.`
    },
};