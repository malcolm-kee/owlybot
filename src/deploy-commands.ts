import { SlashCommandBuilder, Routes } from 'discord.js';
import { REST } from '@discordjs/rest';
import { clientId, guildId, token } from './config';

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong'),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info'),
].map((command) => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest
	.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registerred application commands!'))
	.catch(console.error);
