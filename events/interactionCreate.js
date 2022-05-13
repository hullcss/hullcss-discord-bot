
const client = require("../index");
const {  DiscordModal, ModalBuilder, ModalField } = require('discord-modal') // Modal and TextInputComponent class

client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});

        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
            return interaction.followUp({ content: "An error has occured " });

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        cmd.run(client, interaction, args);
    }

    // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.run(client, interaction);
    }

        // Context Menu Handling
        if (interaction.isButton()) {

            if(interaction.customId == "codeOfConduct"){
                interaction.member.roles.add("973646380771979304")
                await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
            }

            if(interaction.customId == "paidModal")
            {
                const modal = new ModalBuilder() // We create a Modal
                .setCustomId('modal-paidmember')
                .setTitle('Paid Member Discord Access')
                .addComponents(
                    new ModalField()
                    .setLabel("Student Name")
                    .setStyle("short")
                    .setMin(1)
                    .setPlaceholder("Joe Bloggs")
                    .setCustomId("studentname"),
                    new ModalField()
                    .setLabel("Student Number")
                    .setStyle("short")
                    .setCustomId("studentnumber")
                    .setMin(9)
                    .setMin(9)
                    .setPlaceholder("201801122")
                    )
                    client.modal.open(interaction, modal) 
            }

            if(interaction.customId == "paidmemberdelete")
            {
                await interaction.message.delete();
                await interaction.reply({ content: 'Message has been deleted', ephemeral: true});
            }




        }
    })