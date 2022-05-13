const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "gorb",
    description: "returns gorb",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ files: ['./images/gorb.jpg']  });
    },
};