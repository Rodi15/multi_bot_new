const config = require('../config.json');
const prefix = config.prefix;

module.exports = (client, message) => {
	if(message.author.bot) return;

	if(message.content.startsWith(prefix)){
		if(message.channel.type != 'text') return message.reply('I can not answer you here!');

		const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
		
		var command = client.commands.get(args[0]);
		if(!command) return;
		command.run(client, message, args);
	}
}
