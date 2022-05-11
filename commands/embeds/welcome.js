const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "welcome",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
            const embed = new MessageEmbed()
            .setColor('GREEN')
            .setFooter(`Called By: ${message.author.tag}`)
            .setTimestamp()
            .setTitle("Welcome!")
            .setDescription(`We're the official student-run Computer Science Society at Hull, set up with the aim of providing engaging events for students with an interest in Computer Science. This basically means our role is to make life outside of your course as fun and interesting as possible, organising both social and technical events for you.`)
            .setThumbnail('https://i.imgur.com/ww6wKwJ.png')
            .addField('Exec Members', `President - <@261607869068214272>.\r\n Secretary - <@265925073926488064>.\r\n Treasurer - <@354324259629170700>.\r\n Social Secretary - NA.\r\n  Publicity Officer - <@328928794364870656>.\r\n Webmaster - <@449573875743981569>.\r\n\r\n\r\n`)
            .addField('Our Links', `https://hullcss.org/links`)
            .addField('Gain Access', `To gain access to the server, you will need to have a read of the code of conduct, found here: https://github.com/hullcss/conduct/ and react to the check mark below.\r\n \r\n **All Members, including Community are required to read this policy to access the server.**`)
            .addField('Confirmation', 'By reacting with the check mark, you confirm that you have read the #hullcss Code of Conduct')
        message.channel.send({ embeds: [embed] })
    },
};
