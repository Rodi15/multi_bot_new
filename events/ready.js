const config = require('../config.json');

module.exports = (client) => {
	console.log('The bot is ready!');
	client.user.setPresence({
		game: {
			name: config.gameName,
			type: config.gameType
		}
	});
}
