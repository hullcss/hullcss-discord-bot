const client = require("../index");
const config = require("../config.json");
const { createWorker } = require('tesseract.js')

client.on("messageCreate", async (message) => {
    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/ +/g);

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);

    const image = message.attachments.first();
    if(!image){return} 
    if(message.channel.id != "970027557607071754"){return}

    try {
        const worker = createWorker()
        await worker.load()
        await worker.loadlanguage('eng')
        await worker.initialize('eng')
        const {
            data: { text },
        } = await worker.recognize(image.url)
        await worker.terminate()
        message.reply(text)
    } catch (e) {
        console.error(e)
    }


});