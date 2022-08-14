const dotenvLoad = require('dotenv-load');
dotenvLoad();

import process from 'node:process';

export const token = process.env.BOT_TOKEN as string;
export const clientId = process.env.DISCORD_APP_CLIENT_ID as string;
export const guildId = process.env.DISCORD_GUILD_ID as string;
