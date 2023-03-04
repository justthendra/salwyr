const { EmbedBuilder } = require('discord.js')
const { QuickDB } = require('quick.db')
const db = new QuickDB();

exports.run = async (client, message, args) => {

    if(args[0] === "set") {

    if(!message.member.permissions.has("ManageMessages")) return message.channel.send("You are not authorized to set a moderation log channel.");
        //const ServerData = Server.findOne({ server_Id: message.guild.id})
                    
        const kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
        if (!kanal) return message.channel.send("You need to specify a channel.");
        db.set(`modLog_${message.guild.id}`, kanal.id)
                    
                const kanalayarlandı = new EmbedBuilder()
                .setAuthor({ name: "Moderation Log | Channel set", iconURL: client.user.displayAvatarURL()})
                .setColor("#00C306")
                .setDescription(`Moderation Log channel successfully set to ${kanal}.\n**Admin:** ${message.author}`)
                .setFooter({
                    text: "Salwyr | Moderation Log",
                    iconURL: client.user.displayAvatarURL()
                })
                .setTimestamp()
                message.channel.send({embeds: [kanalayarlandı]})

    }

    if(args[0] === "reset") {
        db.delete(`modLog_${message.guild.id}`)

        const kanalgitti = new EmbedBuilder()
        .setAuthor({ name: "Moderation Log | Channel reset", iconURL: client.user.displayAvatarURL()})
        .setColor("#00C306")
        .setDescription(`Moderation Log channel successfully resetted.\n**Admin:** ${message.author}`)
        .setFooter({
            text: "Salwyr | Moderation Log",
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
    name: "modlog",
    description: "Set auto role on your server...",
    usage: "modlog"
}