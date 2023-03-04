const { EmbedBuilder } = require('discord.js')

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ManageMessages")) return message.reply("You need `MANAGE_MESSAGES` permission to execute this command.");

    message.channel.permissionOverwrites.edit(message.guild.roles.everyone, {
        ViewChannel: true,
        SendMessages: true,
        ReadMessageHistory: true,
        AttachFiles: true
    });

    const embed = new EmbedBuilder()
    .setAuthor({ name: "A channel is unlocked.", iconURL: message.author.displayAvatarURL()})
    .setDescription(`The channel named ${message.channel} is unlocked, Now anyone can post on this channel.`)
    .setColor("#00B50C")
    .setFooter({
        text: `Salwyr | Unlock Channel`,
        iconURL: client.user.displayAvatarURL()
    })
    .setTimestamp()
    message.channel.send({embeds: [embed]})
    
}

exports.conf = {
    aliases: [],
    permLevel: 1,
    kategori: "moderation"

}

exports.help = {
    name: "unlock",
    description: "Show about the salwyr bot embed",
    usage: "unlock"
}