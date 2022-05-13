
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
                if(interaction.member.roles.cache.has(`427878753008353292`))
                {
                    await interaction.deferReply({ ephemeral: true })
                    interaction.followUp({ content: 'You already have the paid member role.', ephemeral: true })

                } 
                else{
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
            }

            if(interaction.customId == "deletemessage")
            {
                await interaction.message.delete();
                await interaction.reply({ content: 'Message has been deleted', ephemeral: true});
            }
        }

        if(interaction.isSelectMenu()) {
            if(interaction.customId == "yearSelect")
            {
                if(interaction.values.includes("0"))
                {
                    interaction.member.roles.add("974754114296741948") // Add Foundation
                    interaction.member.roles.remove("441276956089122836") // Remove First Year
                    interaction.member.roles.remove("441276979514441741") // Remove Second Year
                    interaction.member.roles.remove("441277048003100684") // Remove Year In Industry Year
                    interaction.member.roles.remove("441277001744121856") // Remove Third Year
                    interaction.member.roles.remove("441277023873138743") // Remove Masters Year
                    interaction.member.roles.remove("460435898660683778") // Remove PhD Year
                    interaction.member.roles.remove("441277481488613386") // Remove Graduate Year
                }
                else if(interaction.values.includes("1"))
                {
                    interaction.member.roles.add("441276956089122836") // Add First Year
                    interaction.member.roles.remove("974754114296741948") // Remove Foundation Year
                    interaction.member.roles.remove("441276979514441741") // Remove Second Year
                    interaction.member.roles.remove("441277048003100684") // Remove Year In Industry Year
                    interaction.member.roles.remove("441277001744121856") // Remove Third Year
                    interaction.member.roles.remove("441277023873138743") // Remove Masters Year
                    interaction.member.roles.remove("460435898660683778") // Remove PhD Year
                    interaction.member.roles.remove("441277481488613386") // Remove Graduate Year
                }
                else if(interaction.values.includes("2"))
                {
                    interaction.member.roles.add("441276979514441741") // Add Second Year
                    interaction.member.roles.remove("974754114296741948") // Remove Foundation Year
                    interaction.member.roles.remove("441276956089122836") // Remove First Year
                    interaction.member.roles.remove("441277048003100684") // Remove Year In Industry Year
                    interaction.member.roles.remove("441277001744121856") // Remove Third Year
                    interaction.member.roles.remove("441277023873138743") // Remove Masters Year
                    interaction.member.roles.remove("460435898660683778") // Remove PhD Year
                    interaction.member.roles.remove("441277481488613386") // Remove Graduate Year
                }
                else if(interaction.values.includes("3"))
                {
                    interaction.member.roles.add("441277048003100684") // Add Year In Industry Year
                    interaction.member.roles.remove("974754114296741948") // Remove Foundation Year
                    interaction.member.roles.remove("441276956089122836") // Remove First Year
                    interaction.member.roles.remove("441276979514441741") // Remove Second Year
                    interaction.member.roles.remove("441277001744121856") // Remove Third Year
                    interaction.member.roles.remove("441277023873138743") // Remove Masters Year
                    interaction.member.roles.remove("460435898660683778") // Remove PhD Year
                    interaction.member.roles.remove("441277481488613386") // Remove Graduate Year
                }
                else if(interaction.values.includes("4"))
                {
                    interaction.member.roles.add("441277001744121856") // Add Third Year
                    interaction.member.roles.remove("974754114296741948") // Remove Foundation Year
                    interaction.member.roles.remove("441276956089122836") // Remove First Year
                    interaction.member.roles.remove("441276979514441741") // Remove Second Year
                    interaction.member.roles.remove("441277048003100684") // Remove Year In Industry Year
                    interaction.member.roles.remove("441277023873138743") // Remove Masters Year
                    interaction.member.roles.remove("460435898660683778") // Remove PhD Year
                    interaction.member.roles.remove("441277481488613386") // Remove Graduate Year
                }
                else if(interaction.values.includes("5"))
                {
                    interaction.member.roles.add("441277023873138743") // Add Masters Year
                    interaction.member.roles.remove("974754114296741948") // Remove Foundation Year
                    interaction.member.roles.remove("441276956089122836") // Remove First Year
                    interaction.member.roles.remove("441276979514441741") // Remove Second Year
                    interaction.member.roles.remove("441277048003100684") // Remove Year In Industry Year
                    interaction.member.roles.remove("441277001744121856") // Remove Third Year
                    interaction.member.roles.remove("460435898660683778") // Remove PhD Year
                    interaction.member.roles.remove("441277481488613386") // Remove Graduate Year
                }



                await interaction.reply({ content: 'Roles have been updated', ephemeral: true});
            }
        }
    })