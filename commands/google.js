module.exports.run = (client, message) => {
	let args = message.content.split(' ').shift();
   	message.channel.send('Вот результат вашего поиска: https://www.google.fr/#q=' + args.join('%20'));
}
