const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	...new SlashCommandBuilder()
		.setName('lock')
		.setDescription('Lock a channel')
		.setDefaultMemberPermissions(
			PermissionFlagsBits.KickMembers || PermissionFlagsBits.BanMembers
		),

	/**
	 *
	 * @param {Client} client
	 * @param {CommandInteraction} interaction
	 * @param {String[]} args
	 */

	run: async (client, interaction) => {
		interaction.channel.permissionOverwrites.edit(interaction.guild.everyone, {
			SendMessages: false,
		});
		interaction.reply('Channel has been locked.');
	},
};
