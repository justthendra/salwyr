const { EmbedBuilder } = require('discord.js')

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ManageMessages")) return message.reply("You need `Manage Messages` permission to execute this command.");
    const eleman = message.mentions.members.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
    if(!eleman) return message.reply("You did not specify a user.");

    const kanal = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name === args[1]) || client.channels.cache.get(args[1])

    eleman.voice.setChannel(kanal)
    const embed = new EmbedBuilder()
    .setAuthor({ name: "A user moved to a different channel.", iconURL: eleman.displayAvatarURL()})
    .setDescription(`The user ${eleman} has been moved to ${kanal}.`)
    .setColor("#00B50C")
    .setFooter({
        text: `Salwyr | Move User`,
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
    name: "moveuser",
    description: "Show about the salwyr bot embed",
    usage: "moveuser"
}