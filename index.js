const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
const fs = require('fs');
const config = require('./config.json');

client.config = config;
//Задачи (Начало)
client.on('message', message => {
    var msgCon = message.content.toLowerCase();
    if(msgCon === 'привет' || msgCon === 'всем доброго времени суток' || msgCon === 'шалом'){
        message.channel.send('Приветствую тебя');
    }   
});

client.on('message', message => {
    var msgCon = message.content.toLowerCase();
    if(msgCon === 'бот подкинь монету'){
		message.channel.send('Подкинул монету...');
		textprediction = ["Орел", "Решка"];
		message.channel.send("Выпало: " +textprediction[Math.floor(Math.random() * textprediction.length)]);
    }   
});

client.on('message', message => {
    var msgCon = message.content.toLowerCase();
    if(msgCon === 'бот скажи дату и время'){
		moment.locale('ru')
		message.channel.send(`**Точная дата и время:** \`${moment().format('dddd, MMMM DD YYYY, hh:mm:ss')}\``);
    }   
});

//Задачи (конец)

fs.readdir('./events/', (err, files) => {
	if(err) return console.log(err);
	files.forEach(file => {
		const event = require(`./events/${file}`);
		var eventName = file.split('.')[0];
		client.on(eventName, event.bind(null, client));
	});
});

client.commands = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
	if(err) return console.log(err);
	files.forEach(file => {
		if(!file.endsWith('.js')) return;
		var command = require(`./commands/${file}`);
		var commandName = file.split('.')[0];
		client.commands.set(commandName, command);
	});
});
client.login(config.token);
