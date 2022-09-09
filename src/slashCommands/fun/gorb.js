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
            await interaction.reply({ files: ['./images/gorb.jpg'] })
        }
        
        if(string == 'cs'){
            await interaction.reply({ files: ['./images/gorbcs.jpg'] })
        }

        if(string == 'party'){
            await interaction.reply({ files: ['./images/gorbcelebration.PNG'] })
        }

        if(string == 'christmas'){
            await interaction.reply({ files: ['./images/gorbchristmas.PNG'] })
        }
        
        if(string == 'storm'){
            await interaction.reply({ files: ['./images/gorbstorm.PNG'] })
        }

        if(string == 'large'){
            await interaction.reply({ files: ['./images/gorblarge.png'] })
        }



    },
};