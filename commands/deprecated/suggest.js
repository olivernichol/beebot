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

const Suggestions = sequelize.define('tags', {
	name: {
		type: Sequelize.STRING,
		unique: true,
	},
	description: Sequelize.TEXT,
    username: Sequelize.STRING,
    category: Sequelize.STRING,
	id: {
		type: Sequelize.INTEGER,
		defaultValue: 0,
        allowNull: false,
        primaryKey: true,
	},
});

module.exports = {
	name: 'suggest',
	description: 'Suggest a command to be added to beebot.' ,
	async execute(client, message, args) {
        Suggestions.sync();
        //var suggestion = "";
        //for (var i = 0; i < args.length; i++) {
            //suggestion = suggestion.concat(args[i])
            //suggestion = suggestion.concat(" ")
        //}
        //await keyv.set('suggestions', await keyv.get('suggestions') + '\n' + suggestion)
    },
};