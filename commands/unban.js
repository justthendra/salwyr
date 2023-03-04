const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const kişi = args[0];

    const data = await db.get(`modLog_${message.guild.id}`)
    const banLog = message.guild.channels.cache.find(şanel => şanel.id === data);

    if(!data) return console.log(`User ${kişi} has been banned.`)
    if(!message.member.permissions.has("BanMembers")) return message.channel.send("Your authority is not enough!")

    if(!args[0]) {
        const idgirmedin = new Discord.EmbedBuilder()
        .setDescription("The user id is incorrect!")
        .setColor("#FF0000")
        .setFooter({
            text: `Salwyr | Unban`,
            iconURL: message.author.displayAvatarURL()
        })
        .setTimestamp()
        return message.channel.send({embeds: [idgirmedin]})
    }

    if(!kişi) {
        const adamyok = new Discord.EmbedBuilder()
       .setDescription("The user id is incorrect!")
       .setColor("#FF0000")
       .setFooter({
            text: `Salwyr | Unban`,
            iconURL: message.author.displayAvatarURL()
        })
        .setTimestamp()
        return message.channel.send({embeds: [adamyok]})
    }
    
    const bangitti = new Discord.EmbedBuilder()
    .setDescription("The ban of the user with the ID has been successfully removed.")
    .setFooter({
        text: `Salwyr | Unban`,
        iconURL: message.author.displayAvatarURL()
    })
    .setColor("#00B50C")
    .setTimestamp()
    message.channel.send({embeds: [bangitti]})
    await message.guild.members.unban(kişi)

    const logembed = new Discord.EmbedBuilder()
    .setDescription(`User **${kişi.id}** has been unbanned`)
    .addFields(
        { name: "Admin", value: `${message.author}`}
    )
    .setColor("#00B50C")
    .setFooter({
        text: `Salwyr | Unban Log`,
        iconURL: message.author.displayAvatarURL()
    })
    .setTimestamp()
    banLog.send({ embeds: [logembed] })
}

exports.conf = {
    aliases: [],
    permLevel: 2,
    kategori: "moderation"
}

exports.help = {
    name: 'unban',
    description: 'Unban a user from the server.',
    usage: 'unban <@user>'
}