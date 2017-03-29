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

		msg = message.content;
		
		var tabMots = msg.split(" "); 

		// blague
		if (/*msg.indexOf('blague') != 1*/ msg == 'blague') {
			axios.get('http://www.chucknorrisfacts.fr/api/get?data=tri:alea;nb=1').then(function(response){
				message.reply(response.data[0].fact);
			}).catch(console.log); 
			
		}

		// meteo en cours
		if (tabMots[0] == 'meteo') {

			axios.get('http://api.openweathermap.org/data/2.5/weather?q='+tabMots[1]+'&appid=a4b7c2bbdb83d7e413ec09dd4a653791').then(function(response){
				message.reply("Meteo a "+tabMots[1]+" est "+response.data.weather[0].description);
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

