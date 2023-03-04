const { EmbedBuilder } = require('discord.js')
const { prefix } = require('../config.json')
const { QuickDB } = require('quick.db')
const db = new QuickDB();

exports.run = async (client, message, args) => {

    if(args[0] === "set") {

        const yeniprefix = args[1];
        db.set(`prefix_${message.guild.id}`, yeniprefix)
        const ayarlandı = new EmbedBuilder()
        .setAuthor({ name: "Prefix changed.", iconURL: message.author.displayAvatarURL()})
        .setDescription(`The user ${message.author} has changed the prefix of this server.`)
        .addFields(
            { name: "Old Prefix", value: `\`${prefix}\`` , inline: true},
            { name: "New Prefix", value: `\`${yeniprefix}\``}
        )
        .setColor("#0E0E0E")
        .setFooter({
            text: `Salwyr | Custom Prefix`,
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [ayarlandı]})
    
    }

    if(args[0] === "reset") {

        db.delete(`prefix_${message.guild.id}`)
        const ayarlandı = new EmbedBuilder()
        .setAuthor({ name: "Prefix resetted.", iconURL: message.author.displayAvatarURL()})
        .setDescription(`The user ${message.author} has changed the prefix of this server.`)
        .addFields(
            { name: "Old Prefix", value: `\`${prefix}\`` , inline: true},
            { name: "New Prefix", value: `\`${yeniprefix}\``}
        )
        .setColor("#0E0E0E")
        .setFooter({
            text: `Salwyr | Custom Prefix`,
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [ayarlandı]})
    }
}

exports.conf = {
    aliases: [],
    permLevel: 2,
    kategori: "settings"

}

exports.help = {
    name: "prefix",
    description: "Show about the salwyr bot embed",
    usage: "prefix"
}