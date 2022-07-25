const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Dalle } = require('dalle-node')


module.exports = {
    ...new SlashCommandBuilder()
        .setName('AI')
        .setDescription('Use the Dalle generator to make an AI generated image')
        .addStringOption((option) => option
            .setName('prompt')
            .setDescription("Your prompt")
            .setRequired(true)
        ),

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        const dalle = new Dalle(process.env.DALLE_TOKEN); // Bearer Token 
        const promptToUse = interaction.options.getString('prompt')
        const generations = await dalle.generate(promptToUse);

        interaction.reply({files: [generations]})

    },
};