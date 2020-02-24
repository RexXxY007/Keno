const Discord = require('discord.js');
const bot = new Discord.client();

bot.on('ready', () =>{
    console.log('The bot is online!');
});

client.on('message', message =>{
    if (message.content === 'ping') {
        message.reply('pong');
    }
});


// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
