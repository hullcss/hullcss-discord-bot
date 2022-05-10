const discord = require("discord.js");

module.exports = {
    name: "links",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const embed = new discord.MessageEmbed()
        .setTitle("Links!")
        .setColor('GREEN')
        .setFooter(`Called By: ${message.author.tag}`)
        .addField('Find us here:','https://hullcss.org/links')
        message.channel.send({ embeds: [embed] });


    },
};
