const client = require("../index");
const discord = require('discord.js');

client.on('modalSubmitInteraction', async (interaction) => {
    if(interaction.customId === 'modal-paidmember'){
        const channel = client.channels.cache.get('970027557607071754')

        const embed = new discord.MessageEmbed()
        .setTitle("New Paid Member Request")
        .setColor('GREEN')
        .addField('Discord Tag', `${ interaction.user}`)
        .addField('Student Name', `${ interaction.fields.getTextInputValue("studentname")}`)
        .addField('Student Number',`${ interaction.fields.getTextInputValue("studentnumber")}`)
        channel.send({content: '<@427866208726155274>', embeds: [embed] });
        await interaction.deferReply({ ephemeral: true })
        interaction.followUp({ content: 'Your request has been sent to execs!', ephemeral: true })

    }  
});