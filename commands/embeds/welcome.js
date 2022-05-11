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
            .addField('Code of Conduct', `To gain access to the server, you will need to have a read of the code of conduct, found here: https://github.com/hullcss/conduct/ and react to the check mark below.\r\n \r\n **All Members, including Community are required to read this policy to access the server.**`)
            .addField('Confirmation', 'By reacting with the check mark, you confirm that you have read the #hullcss Code of Conduct')
        message.channel.send({ embeds: [embed] })
    },
};
