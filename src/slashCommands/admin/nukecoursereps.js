const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	...new SlashCommandBuilder()
		.setName('nukecourserep')
		.setDescription('Replaces course rep')
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
		await interaction.deferReply({
			ephemeral: true,
		});

		try {
			const role = interaction.guild.roles.cache.find(
				(r) => r.name === 'Course Rep'
			);

			interaction.guild.roles.create({
				name: role.name,
				color: role.color,
				hoist: role.hoist,
				position: role.position,
				permissions: role.permissions,
				mentionable: role.mentionable,
			});

			role.delete(role.id, 'The Nuke Course Rep Command Was Run. ');

			const newRole = interaction.guild.roles.cache.find(
				(r) => r.name === 'Course Rep'
			);
			interaction.editReply(
				`Role has been replaced. The new role ID is: ${newRole.id}. Please pass this to Kieran.`,
				true
			);
		} catch (error) {
			interaction.editReply({
				content: error,
				ephemeral: true,
			});
		}
	},
};
