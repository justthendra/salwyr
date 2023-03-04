const { EmbedBuilder } = require('discord.js')
const { QuickDB } = require('quick.db')
const db = new QuickDB();


exports.run = async (client, message, args) => {

    if(args[0] === "set") {

    if(!message.member.permissions.has("ManageMessages")) return message.channel.send("You are not authorized to set a message log channel.");
                    
        const kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
        if (!kanal) return message.channel.send("You need to specify a channel.");
        db.set(`mesajLog_${message.guild.id}`, kanal.id)
                    
            const kanalayarlandı = new EmbedBuilder()
            .setAuthor({ name: "Message Log | Channel set", iconURL: client.user.displayAvatarURL()})
            .setColor("#00C306")
            .setDescription(`Message Log channel successfully set to ${kanal}.\n**Admin:** ${message.author}`)
            .setFooter({
                text: "Salwyr | Message Log",
                iconURL: client.user.displayAvatarURL()
            })
            .setTimestamp()
            message.channel.send({embeds: [kanalayarlandı]})

    }

    if(args[0] === "reset") {
        
        db.delete(`mesajLog_${message.guild.id}`)

        const kanalgitti = new EmbedBuilder()
        .setAuthor({ name: "Message Log | Channel reset", iconURL: client.user.displayAvatarURL()})
        .setColor("#00C306")
        .setDescription(`Message Log channel successfully resetted.\n**Admin:** ${message.author}`)
        .setFooter({
            text: "Salwyr | Message Log",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [kanalgitti]})
    }
}

exports.conf = {
    aliases: [],
    permLevel: 2,
    kategori: "server"
}

exports.help = {
    name: "messagelog",
    description: "Set auto role on your server...",
    usage: "messagelog"
}