const ytdl = require('ytdl-core-discord');

module.exports = {
	name: 'rickroll',
	description: 'A command that will never give you up.',
	execute(client, message, args) {
        message.channel.send('Im never gonna give you up.');
        play(message)
    },
};
async function play(message) {
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = await connection.play('./music/rickroll.mp3');
        dispatcher.on('finish', () => {
            message.channel.send('Finished Playing!');
            connection.disconnect();
        });
    }
}