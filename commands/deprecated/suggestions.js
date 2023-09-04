const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');

module.exports = {
	name: 'suggestions',
	description: 'List the current suggestions.' ,
	async execute(client, message, args) {
        message.channel.send('Current list of suggestions: \n' + await keyv.get('suggestions'))
    },
};