const Discord = require('discord.js');
const bot = new Discord.client();

client.login("NjgxNDE3MzgyMDQ4NDMyMTg2.XlOJ9w.xZfwgu8C0ZPSko5fUg3TVlKIGxY");

bot.on('ready', () =>{
    console.log('The bot is online!');
});

client.on('message', message =>{
    if(message.author.bot)
    return;

    if(message.content.toLowerCase() === 'hello')
    message.channel.send("Hey!");
});
