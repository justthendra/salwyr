const Discord = require('discord.js');

exports.run = async (client, message) => {

    if(!message.content.startsWith("s-")) return
    const messageArray = message.content.split(' ');
    const args = messageArray.slice(1);

    if(!message.member.permissions.has("ManageMessages")) return message.reply("You need `Manage Messages` permission to execute this command.");

    message.channel.setRateLimitPerUser(args[0]);
    message.reply(`Slowmode has been set to: ${args[0]} seconds.`)

}

exports.conf = {
    aliases: [],
    permLevel: 1,
    kategori: "moderation"

}

exports.help = {
    name: "slowmode",
    description: "Show about the salwyr bot embed",
    usage: "slowmode"
}