const { EmbedBuilder } = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ManagaRoles")) return message.channel.send("You do not have sufficient privileges to set registry channel on the server.");

    if(args[0] === "set") {
                    
        const kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[1]);
        if (!kanal) return message.channel.send("You need to specify a channel.");
        db.set(`kayıtKanal_${message.guild.id}`, kanal.id)
                    
        const kanalayarlandı = new EmbedBuilder()
        .setAuthor({ name: "Registry System | Channel set", iconURL: client.user.displayAvatarURL()})
        .setColor("#00C306")
        .setDescription(`Registry channel successfully set to ${kanal}.\n**Admin:** ${message.author.username}`)
        .setFooter({
            text: "Salwyr | Registry System",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [kanalayarlandı]})

    }

    if(args[0] === "reset") {

                        
        const sıfırlandı = new EmbedBuilder()
        .setAuthor({ name: "Registry System | Channel reset", iconURL: client.user.displayAvatarURL()})
        .setColor("#00C306")
        .setDescription(`Registry system successfully resetted.\n**Admin:** ${message.author.username}`)
        .setFooter({
            text: "Salwyr | Registry System",
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [sıfırlandı]})
        db.delete(`kayıtKanal_${message.guild.id}`)

        }
}

exports.conf = {
    aliases: [],
    permLevel: 2,
    kategori: "moderation"

}

exports.help = {
    name: "registry-channel",
    description: "Show about the salwyr bot embed",
    usage: "registry-channel"
}