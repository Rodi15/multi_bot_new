const config = require('../config.json');
const prefix = config.prefix;

const moment = require('moment');

module.exports = (client, message) => {
	if(message.author.bot) return;

	if(message.content.startsWith(prefix)){
		if(message.channel.type != 'text') return message.reply('I can not answer you here!');

		const args = message.content.toLowerCase().slice(prefix.length).trim().split(/ +/g);
		
		var command = client.commands.get(args[0]);
		if(!command) return;
		command.run(client, message, args);
	}

    	var msgCon = message.content.toLowerCase();
	
    	if(msgCon === 'привет' || msgCon === 'всем доброго времени суток' || msgCon === 'шалом'){
        	message.channel.send('Приветствую тебя');
    	}
    	if(msgCon === 'бот подкинь монету'){
		message.channel.send('Подкинул монету...');
		textprediction = ["Орел", "Решка"];
		message.channel.send("Выпало: " +textprediction[Math.floor(Math.random() * textprediction.length)]);
    	}   
    	if(msgCon === 'бот скажи дату и время'){
		moment.locale('ru')
		message.channel.send(`**Точная дата и время:** \`${moment().format('dddd, MMMM DD YYYY, hh:mm:ss')}\``);
    	}
}
