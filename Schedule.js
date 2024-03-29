//https://discord.com/oauth2/authorize?client_id=908076787974701107&scope=bot

console.log('Starting...');

require("dotenv").config();
const fs = require('fs');
const Discord = require('discord.js');
const prefix = process.env.PREFIX;
const token = process.env.CLIENT_TOKEN;

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) { // find commands
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log("Found command", file);
}

client.login(token);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('Bot activated with prefix ' + prefix)
}


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return message.channel.send("That command does not exist");
    if (message.guild == null) return message.channel.send("This bot is designed for servers. Please add it to a server to use it.")

    console.log(message.author.tag, "(id: " + message.author.id + ")", "used command", command, "in", message.guild.name, "(id: " + message.guild.id + ")"); // log the command used and who used it in what server

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Error "__' + error + '__" was encountered while trying to execute that command');
    }
});