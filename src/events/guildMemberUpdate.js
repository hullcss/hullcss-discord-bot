const client = require('../index');

client.on('guildMemberUpdate', async (oldMember, newMember) => {
	console.log('Event fired');

	const rolesAdded = newMember.roles.cache.filter(
		(x) => !oldMember.roles.cache.get(x.id)
	);
	const rolesRemoved = oldMember.roles.cache.filter(
		(x) => !newMember.roles.cache.get(x.id)
	);

	if (rolesAdded.size != 0 || rolesRemoved.size != 0) {
		const roleAddedString = [];
		for (const role of [...rolesAdded.values()]) {
			roleAddedString.push(role.toString());
		}

		const roleRemovedString = [];
		for (const role of [...rolesRemoved.values()]) {
			roleRemovedString.push(role.toString());
		}

		console.log(roleAddedString);
	}
});
