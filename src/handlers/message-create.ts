import { Message, TextChannel, ThreadAutoArchiveDuration } from 'discord.js';
import { ChannelType } from 'discord.js';

export const onMessageCreated = async (message: Message<boolean>) => {
	if (isHelpChannel(message.channel)) {
		if (message.author.bot) {
			return;
		}
		console.log('Received new question from', message.author, 'in', message.channel);

		const userName = message.member?.nickname ?? message.author.username;
		const thread = await message.startThread({
			name: `Help ${userName}`,
			autoArchiveDuration: ThreadAutoArchiveDuration.OneDay,
		});
		thread.send(`${message.member} This thread is for your question`);
	} else {
		console.log('not in help channel');
	}
};

const isHelpChannel = (channel: Message['channel']): channel is TextChannel => {
	return channel.type === ChannelType.GuildText && channel.name.startsWith('bot-help-');
};
