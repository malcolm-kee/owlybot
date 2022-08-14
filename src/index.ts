import { stripIndent } from 'common-tags';
import { Client, GatewayIntentBits } from 'discord.js';
import { token } from './config';
import { onMessageCreated } from './handlers/message-create';

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.once('ready', () => console.log('Ready'));
client
	.on('interactionCreate', async (interaction) => {
		if (!interaction.isChatInputCommand()) {
			return;
		}

		const { commandName } = interaction;

		switch (commandName) {
			case 'ping':
				await interaction.reply('Pong v3!');
				break;

			case 'server':
				await interaction.reply(stripIndent`Server name: ${interaction.guild?.name}
Total members: ${interaction.guild?.memberCount}`);
				break;

			case 'user':
				await interaction.reply(stripIndent`Your tag: ${interaction.user.tag}
Your id: ${interaction.user.id}`);
				break;
		}
	})
	.on('messageCreate', onMessageCreated);

client.login(token);
