const librcon = require("librcon");
const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');
const successline = "Bee Summoned! Total Bee Count: ";

module.exports = {
	name: 'bee',
	description: 'Summon a bee!',
	async execute(client, message, args, connection, dispatcher) {
        NewBeeCount = parseInt(await keyv.get('bees')) + 1;
        beenumstring = String(NewBeeCount);
        await keyv.set('bees', beenumstring);
		finalsuccessline = successline.concat(beenumstring);
		librcon.send("execute at @a run summon bee", "MCPASSWORD", "MCSERVERIP", 25575).then((res) => {
			console.log("Got response : " + res);
		}).catch((err) => {
			console.log("An error occured!\n " + err.message);
		});		
		message.channel.send(finalsuccessline);
    },
};