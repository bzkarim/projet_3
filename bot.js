const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => { 
	if (! message.author.bot) {
		if (message.content === 'ping') {
			message.reply('pong');
		}

		if (message.content === 'blague') {
			axios.get('http://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb=1').then(function(response){
				message.reply(response.data[0].fact);
			}).catch(console.log); 
			
		}
	
		console.log(message);

	}

});

client.on('presenceUpdate', function(oldMember, newMember) {
	console.log(oldMember.presence, '=>', newMember.presence);
	if (newMember.presence.status == "online" && newMember.user.username ==  "bramas")
		newMember.user.sendMessage("Bonjour maitre, je suis le bot de BOUZOUANE karim, que puis-je faire pour vous aujourdhui ?");
});

client.login(process.env.DISCORD_TOKEN);


var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000);

