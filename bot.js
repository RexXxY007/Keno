const Discord = require('discord.js');
const client = new Discord.client();

client.login("NjgxNDE3MzgyMDQ4NDMyMTg2.XlPFdQ.9WWZSzCv7uqm95LqfedVBnsowhs");

client.om('ready', () => {
    console.log("The bot is logged in!");
});

client.on('message', message => {
    if(message.author.bot)
        return;
    
    if(message.content.toLowerCase() === 'hello')
        message.channel.send("hey!");
});
