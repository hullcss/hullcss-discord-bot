const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "links",
    description: "returns links of Hullcss",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const embed = new MessageEmbed()
        .setTitle("Links!")
        .setColor('GREEN')
        .setFooter({ text: `Called By: ${interaction.user.tag}`})
        .addField('Find us here:','https://hullcss.org')
        interaction.reply({ embeds: [embed]});
    },
};
