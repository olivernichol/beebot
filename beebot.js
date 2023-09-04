const fs = require('fs');
const Keyv = require('keyv');
const keyv = new Keyv('sqlite://./database.sqlite');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	// SQLite only
	storage: 'database.sqlite',
});
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const librcon = require("librcon");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
const randomInt = require('random-int');
var interval;
var mobilealertchannel;
var NewBeeCount;
var beenumstring;
const successline = "Bee Summoned! Total Bee Count: ";
var finalsuccessline;
let statuses = [['You.', 'WATCHING'], ['For Bees!', 'WATCHING'], ['Tomato.', 'WATCHING'], ['buzzy tunes.', 'LISTENING'], ["Neon's tears.", 'LISTENING']]
client.once('ready', async () => {
    mobilealertchannel = client.channels.cache.get("WEBHOOKCHANNEL");
	await keyv.set('vibing', 'false')
	interval = client.setInterval(changeStatus(), 300000)
    console.log("Ready");
});

client.on('message', async message => {
    if(message.author.id === client.user.id) return; //COMMENT THIS OUT IF YOU WANT THE ATOM BEE
    //else if ((message.content.toLowerCase().includes('right')) && (parseInt(await keyv.get('level')) >= 1)) {
		//message.channel.send(message.content.replace(/right/gi, "Left"));
	//}
	//else if ((message.content.toLowerCase().includes("bee")) && (parseInt(await keyv.get('level')) == 3)) {
		//NewBeeCount = parseInt(await keyv.get('bees')) + 1;
        //beenumstring = String(NewBeeCount);
        //await keyv.set('bees', beenumstring);
		//finalsuccessline = successline.concat(beenumstring);
		//librcon.send("execute positioned -73 56 104 run summon bee", "MCSERVERPASSWORD", "MCSERVERIP", 8125);
		//message.channel.send(finalsuccessline);
	//}
	//else if (((message.content.toLowerCase().includes(" bee ")) && (parseInt(await keyv.get('level')) == 2)) || ((message.content.toLowerCase().startsWith("bee")) && (parseInt(await keyv.get('level'))) == 2)) {
		//NewBeeCount = parseInt(await keyv.get('bees')) + 1;
        //beenumstring = String(NewBeeCount);
        //await keyv.set('bees', beenumstring);
		//finalsuccessline = successline.concat(beenumstring);
		//librcon.send("execute positioned -73 56 104 run summon bee", "MCSERVERPASSWORD", "MCSERVERIP", 8125);
		//message.channel.send(finalsuccessline);
	//}
    else if (message.webhookID) {
		var words = message.content.split(" ")
		if (message.channel.id.startsWith("WEBHOOKCHANNEL")) {
			var softsuccessline;
			softsuccessline = ' summoned a bee on ' + words.pop() + '! Current Bee Count: '
			softsuccesslinewname = words.join(" ") + softsuccessline
			console.log("Spawning Bees.");
			NewBeeCount = parseInt(await keyv.get('bees')) + 1;
			beenumstring = String(NewBeeCount);
			finalsuccessline = softsuccesslinewname.concat(beenumstring);
			librcon.send("execute at @a run summon bee", "MCPASSWORD", "MCSERVERIP", 25575);
			mobilealertchannel.send(finalsuccessline);
			message.delete();
		}
		
		else if (message.channel.id.startsWith("WEBHOOKCHANNEL")) {
			console.log("Killing Bees!");
			await keyv.set('bees', '0')
			librcon.send("kill @e[type=bee]", "MCPASSWORD", "MCSERVERIP", 25575);
			softsuccessline = ' killed the bees on ' + words.pop()
			mobilealertchannel.send(words.join(" ") + softsuccessline)
			message.delete();
		}
	}
	else if (!message.content.startsWith(prefix))
	{
		return;
	}
	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command)) return;
    try {
        client.commands.get(command).execute(client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token);

function changeStatus () {
	status = statuses[randomInt(4)]
    client.user.setActivity(status[0], { type: status[1] });
}
