const client = require("../index");
const discord = require('discord.js');

client.on('modalSubmitInteraction', async (interaction) => {
    if(interaction.customId === 'modal-paidmember'){
        const execchannel = client.channels.cache.get('974268736079015956')

        const embed = new discord.MessageEmbed()
        .setTitle("New Paid Member Request")
        .setColor('GREEN')
        .addField('Discord Tag', `${ interaction.user}`)
        .addField('Student Name', `${ interaction.fields.getTextInputValue("studentname")}`)
        .addField('Student Number',`${ interaction.fields.getTextInputValue("studentnumber")}`)
        const row = new discord.MessageActionRow()
        .addComponents(
            new discord.MessageButton()
            .setCustomId('addrole')
            .setEmoji('')
            .setLabel('Add Role')
            .setStyle('SUCCESS')
        )
        .addComponents(
            new discord.MessageButton()
            .setCustomId('deletemessage')
            .setEmoji('')
            .setLabel('Delete Message')
            .setStyle('DANGER')
        )
        execchannel.send({embeds: [embed], components: [row] });
        await interaction.deferReply({ ephemeral: true })
        interaction.followUp({ content: 'Your request has been sent to execs!', ephemeral: true })

    }  
});