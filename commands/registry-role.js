const { EmbedBuilder } = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ManagaRoles")) return message.channel.send("You do not have sufficient privileges to set registry role on the server.");

    if(args[0] === "unregistered") {

        const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        if (!rol) return message.channel.send("You need to specify a unregistered role.");
        db.set(`unregisteredId_${message.guild.id}`, rol.id)
                    
        const kanalayarlandı = new EmbedBuilder()
        .setAuthor({ name: "Registry System | Unregistered Role set", iconURL: client.user.displayAvatarURL()})
        .setColor("#00C306")
        .setDescription(`Unregistered Role successfully set to ${rol}.\n**Admin:** ${message.author.username}`)
        .setFooter({
            text: "Salwyr | Registry System",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [kanalayarlandı]})

    }

    if(args[0] === "unregistered reset") {

        db.delete(`unregisteredId_${message.guild.id}`, rol.id)
                    
        const kanalayarlandı = new EmbedBuilder()
        .setAuthor({ name: "Registry System | Unregistered Role set", iconURL: client.user.displayAvatarURL()})
        .setColor("#00C306")
        .setDescription(`Unregistered role successfully resetted.\n**Admin:** ${message.author.username}`)
        .setFooter({
            text: "Salwyr | Registry System",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [kanalayarlandı]})

    }

    if(args[0] === "registered") {

        const rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);
        if (!rol) return message.channel.send("You need to specify a role.");
        db.set(`rolId_${message.guild.id}`, rol.id)
                    
        const kanalayarlandı = new EmbedBuilder()
        .setAuthor({ name: "Registry System | Role set", iconURL: client.user.displayAvatarURL()})
        .setColor("#00C306")
        .setDescription(`Registry Role successfully set to ${rol}.\n**Admin:** ${message.author.username}`)
        .setFooter({
            text: "Salwyr | Registry System",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [kanalayarlandı]})

    }

    if(args[0] === "registered reset") {
                        
        const sıfırlandı = new EmbedBuilder()
        .setAuthor({ name: "Registry System | Role reset", iconURL: client.user.displayAvatarURL()})
        .setColor("#00C306")
        .setDescription(`Registry role successfully resetted.\n**Admin:** ${message.author.username}`)
        .setFooter({
            text: "Salwyr | Registry System",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [sıfırlandı]})
        db.delete(`rolId_${message.guild.id}`)

    }

    if(args[0] === "reset") {
                        
        const sıfırlandı = new EmbedBuilder()
        .setAuthor({ name: "Registry System | System reset", iconURL: client.user.displayAvatarURL()})
        .setColor("#00C306")
        .setDescription(`Registry system successfully resetted.\n**Admin:** ${message.author.username}`)
        .setFooter({
            text: "Salwyr | Registry System",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [sıfırlandı]})
        db.delete(`unregisteredId_${message.guild.id}`)
        db.delete(`rolId_${message.guild.id}`)

    }
}

exports.conf = {
    aliases: [],
    permLevel: 2,
    kategori: "moderation"

}

exports.help = {
    name: "registry-role",
    description: "Show about the salwyr bot embed",
    usage: "registry-role"
}