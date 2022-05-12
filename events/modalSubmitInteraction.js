const client = require("../index");
const discord = require('discord.js');

client.on('modalSubmitInteraction', async (interaction) => {
    if(interaction.customId === 'modal-paidmember'){
        const execchannel = client.channels.cache.get('849708647953334282')

        const embed = new discord.MessageEmbed()
        .setTitle("New Paid Member Request")
        .setColor('GREEN')
        .addField('Discord Tag', `${ interaction.user}`)
        .addField('Student Name', `${ interaction.fields.getTextInputValue("studentname")}`)
        .addField('Student Number',`${ interaction.fields.getTextInputValue("studentnumber")}`)

        execchannel.send({embeds: [embed] });
        await interaction.deferReply({ ephemeral: true })
        interaction.followUp({ content: 'Your request has been sent to execs!', ephemeral: true })

    }  
});