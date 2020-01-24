const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
const config = require('./config.json');

client.config = config;

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
