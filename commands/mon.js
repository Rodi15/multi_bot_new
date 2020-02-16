module.exports.run = (client, msg, args) => {
	textprediction = ['Орел', 'Решка'];
	msg.channel.send(textprediction[Math.floor(Math.random() * textprediction.length)]);
}
