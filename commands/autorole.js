const { EmbedBuilder } = require('discord.js');
//const Server = require('../models/server')
const { QuickDB } = require('quick.db')
const db = new QuickDB();

exports.run = async (client, message, args) => {

    if(args[0] === "role") {

        if(!message.member.permissions.has("ManageRoles")) return message.channel.send("You do not have sufficient privileges to set autorole on the server.");
        //const ServerData = Server.findOne({ server_Id: message.guild.id})

            const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
            if (!rol) return message.channel.send("You need to specify a role.");
            db.set(`autorole_${message.guild.id}`, rol.id)
            
                const ayarlandı = new EmbedBuilder()
                .setAuthor({ name: "Auto role | Role set", iconURL: client.user.displayAvatarURL()})
                .setColor("#00C306")
                .setDescription(`Autorole successfully set to ${rol}.\n**Admin:** ${message.author.username}`)
                .setFooter({
                    text: "Salwyr | Auto Role",
                    iconURL: client.user.displayAvatarURL()
                })
                message.channel.send({embeds: [ayarlandı]})

    }

    if (args[0] === "channel") {

        if(!message.member.permissions.has("ManagaRoles")) return message.channel.send("You do not have sufficient privileges to set autorole on the server.");
        //const ServerData = Server.findOne({ server_Id: message.guild.id})
                    
        const kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
        if (!kanal) return message.channel.send("You need to specify a channel.");
        db.set(`autoroleKanal_${message.guild.id}`, kanal.id)
                    
                const kanalayarlandı = new EmbedBuilder()
                .setAuthor({ name: "Auto role | Channel set", iconURL: client.user.displayAvatarURL()})
                .setColor("#00C306")
                .setDescription(`Autorole channel successfully set to ${kanal}.\n**Admin:** ${message.author.username}`)
                .setFooter({
                    text: "Salwyr | Auto Role",
                    iconURL: client.user.displayAvatarURL()
                })
                .setTimestamp()
                message.channel.send({embeds: [kanalayarlandı]})
    }

    if (args[0] === "reset") {

        if(!message.member.permissions.has("ManagaRoles")) return message.channel.send("You do not have sufficient privileges to set autorole on the server.");
                        
                const kanalayarlandı = new EmbedBuilder()
                .setAuthor({ name: "Auto role | System reset", iconURL: client.user.displayAvatarURL()})
                .setColor("#00C306")
                .setDescription(`Autorole system successfully resetted.\n**Admin:** ${message.author.username}`)
                .setFooter({
                    text: "Salwyr | Auto Role",
                    iconURL: client.user.displayAvatarURL()
                })
                .setTimestamp()
                message.channel.send({embeds: [kanalayarlandı]})

                db.delete(`autorole_${message.guild.id}`)
                db.delete(`autoroleKanal_${message.guild.id}`)
    }

}

exports.conf = {
    aliases: [],
    permLevel: 1,
    kategori: "server"
}

exports.help = {
    name: "autorole",
    description: "Set auto role on your server...",
    usage: "autorole"
}