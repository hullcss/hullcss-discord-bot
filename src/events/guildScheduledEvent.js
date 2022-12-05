const { MessageEmbed } = require('discord.js');
const client = require('../index');
const transformAndWriteToFile = require('json-to-frontmatter-markdown').default;
const wait = require('node:timers/promises').setTimeout;

client.on('guildScheduledEventCreate', async (guildScheduledEvent) => {
	const eventsChannel = client.channels.cache.get('973686987787751534');
	const markdownChannel = client.channels.cache.get('1025318437028896778');
	let location = '';
	let endTime = 'No Scheduled End Time';

	const embed = new MessageEmbed()
		.setTitle(guildScheduledEvent.name)
		.setDescription(guildScheduledEvent.description)
		.setColor('GREEN')
		.setTimestamp()
		.setImage(
			`https://cdn.discordapp.com/guild-events/${guildScheduledEvent.id}/${guildScheduledEvent.image}.png?size=2048`
		);

	if (guildScheduledEvent.entityType !== 'EXTERNAL') {
		embed.addField(
			'Location',
			`${guildScheduledEvent.channel.name} - [Link](https://discordapp.com/channels/427865794467069962/${guildScheduledEvent.channelId})`
		);

		location = `${guildScheduledEvent.channel.name} - [Link](https://discordapp.com/channels/427865794467069962/${guildScheduledEvent.channelId})`;
	} else {
		embed.addField(
			'Location',
			`External - ${guildScheduledEvent.entityMetadata.location}`
		);

		location = `External - ${guildScheduledEvent.entityMetadata.location}`;
	}

	embed.addField(
		'Start Date and Time',
		`${guildScheduledEvent.scheduledStartAt.toLocaleString('en-UK', {
			timeZone: 'Europe/London',
		})}`,
		true
	);

	if (guildScheduledEvent.scheduledEndAt !== null) {
		embed.addField(
			'End Date and Time',
			`${guildScheduledEvent.scheduledEndAt.toLocaleString('en-UK', {
				timeZone: 'Europe/London',
			})}`,
			true
		);

		endTime = guildScheduledEvent.scheduledEndAt.toLocaleString('en-UK', {
			timeZone: 'Europe/London',
		});
	}

	embed.addField('InviteURL', `${guildScheduledEvent.url}`);
	eventsChannel.send({ embeds: [embed] });

	transformAndWriteToFile({
		frontmatterMarkdown: {
			frontmatter: [
				{ layout: 'base.html' },
				{ tags: 'event' },
				{ title: guildScheduledEvent.name },
				{
					date: guildScheduledEvent.scheduledStartAt
						.toISOString()
						.substring(0, 10),
				},
				{ teaser: guildScheduledEvent.description },
			],
			body: `
# ${guildScheduledEvent.name}

${guildScheduledEvent.description}
		  
## Date and Times

- Start Date and Time: ${guildScheduledEvent.scheduledStartAt.toLocaleString(
				'en-UK',
				{ timeZone: 'Europe/London' }
			)}
- End Date and Time: ${endTime}

## Location:

${location}

## Invite

<a href="${guildScheduledEvent.url}">Invite Link</a>
			`,
		},
		path: `src/markdownOutput`,
		fileName: `${guildScheduledEvent.name}.md`,
	});

	await wait(5000);

	markdownChannel.send({
		files: [`src/markdownOutput/${guildScheduledEvent.name}.md`],
	});
});
