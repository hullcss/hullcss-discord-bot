const { Client, CommandInteraction } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    ...new SlashCommandBuilder()
        .setName('gorb')
        .setDescription('Gorb')
        .addStringOption(option =>
            option
            .setName('type')
            .setDescription('The gorb type')
            .addChoices(
                { name: 'Christmas', value: 'christmas' },
                { name: 'Party', value: 'party' },
                { name: 'Computer Science', value: 'cs' },
                { name: 'Large', value: 'large' },
                { name: 'Storm', value: 'storm' },
            )),

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const string = interaction.options.getString('type');

        if(string == null){
            interaction.followUp({ files: ['./images/gorb.jpg'] })
        }
        if(string === 'cs'){
            interaction.followUp({ files: ['./images/gorbcs.jpg'] })
        }

        if(string === 'party'){
            interaction.followUp({ files: ['./images/gorbcelebration.png'] })
        }

        
        if(string === 'christmas'){
            interaction.followUp({ files: ['./images/gorbchristmas.png'] })
        }

        if(string === 'storm'){
            interaction.followUp({ files: ['./images/gorbstorm.png'] })
        }

        if(string == 'large'){
            interaction.followUp({ files: ['./images/gorblarge.png'] })
        }



    },
};