const librcon = require("librcon");
const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');

module.exports = {
	name: 'onebeetoomany',
	description: 'For when there is just one bee too many.',
	async execute(client, message, args) {
        console.log("Killing a bee");
        var CurrentBees = parseInt(await keyv.get('bees'))
        CurrentBees -= 1;
		await keyv.set('bees', CurrentBees.toString());
        librcon.send("kill @e[type=bee,sort=random,limit=1]", "MCPASSWORD", "MCSERVERIP", 25575).then((res) => {
            console.log("Got response : " + res);
        }).catch((err) => {
            console.log("An error occured!\n " + err.message);
        });
		message.channel.send('You are below average - a bee was removed.')
    },
};