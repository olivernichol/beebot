const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');
const Discord = require('discord.js');
const librcon = require("librcon");
const successline = "Bees Summoned! Total Bee Count: ";
var ServerCrasher = false;
var confirmid;
var confirmargs;
var confirmchannel;
var clientchannel;

module.exports = {
	name: 'confirm',
	description: 'Mods only: Confirms the most recent command.',
	async execute(client, message, args) {
            message.channel.send("Understood. Executing Command.")
            confirmid = parseInt(await keyv.get('confirmid'));
            confirmargs = await keyv.get('confirmargs');
            confirmchannel = await keyv.get('confirmchannel');
            clientchannel = client.channels.cache.get(confirmchannel);
			clientchannel.send("Your Command was approved!")
			if (confirmid == 1) {
				RaiseBeeArmy(confirmargs, clientchannel)
			}
			else if (confirmid == 4) {
				ServerCrasher = true
				CrashTheServer(clientchannel)
			}
			else if (confirmid == 5) {
				ServerCrasher = false
            }
            else if (confirmid == 6) {
                ServerCrasher = true
                CrashTheBot(clientchannel)
			}
			await keyv.set('confirmid', '');
        	await keyv.set('confirmargs', '');
        	await keyv.set('confirmchannel', '');
    },
};
async function RaiseBeeArmy(HowManyYaGot, message) {
	var i;
	for (i = 0; i < HowManyYaGot; i++) {
		librcon.send("execute at @a run summon bee", "MCPASSWORD", "MCSERVERIP", 25575);
	}
    NewBeeCount = parseInt(await keyv.get('bees')) + parseInt(HowManyYaGot);
    beenumstring = String(NewBeeCount);
    await keyv.set('bees', beenumstring);
	finalsuccessline = successline.concat(beenumstring);
	message.send(finalsuccessline);
}
async function CrashTheServer(message) {
	message.channel.send("Here we go! Server crashing started...")
	var i;
	for (i = 0; i < 1000; i++) {
		if (ServerCrasher) {
			librcon.send("execute at @a run summon bee", "MCPASSWORD", "MCSERVERIP", 25575);
		}
	}
}
async function CrashTheBot(message) {
	message.channel.send("Here we go! Server crashing started...")
	while (ServerCrasher) {
		librcon.send("execute at @a run summon bee", "MCPASSWORD", "MCSERVERIP", 25575);
	}
}