const { EmbedBuilder } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB();
const moment = require('moment')

exports.run = async (client, message, args) => {

    const bitiş = message.createdAt
    const günü = moment(new Date(bitiş).toISOString()).format('DD')
    const ayı = moment(new Date(bitiş).toISOString()).format('MM').replace("01", "Janury").replace("02","February").replace("03","March").replace("04", "April").replace("05", "May").replace("06", "June").replace("07", "July").replace("08", "August").replace("09", "September").replace("10","October").replace("11","November").replace("12","December")
    const yılı =  moment(new Date(bitiş).toISOString()).format('YYYY')
    const saati = moment(new Date(bitiş).toISOString()).format('HH:mm')
    
    if(!message.member.permissions.has("ManageRoles")) return message.channel.send("You do not have sufficient privileges to set registry system on the server.");
    const üye = message.mentions.members.first() || client.users.cache.find(yenilavuk => yenilavuk.username === args[0])
    if(!üye) return message.reply("You forgot to tag a member.")

    const kayıtsız = await db.get(`unregisteredId_${message.guild.id}`)
    const kayıtsızrol = message.guild.roles.cache.find(röl => röl.id === kayıtsız)
    const kayıtlı = await db.get(`rolId_${message.guild.id}`)
    const kayıtlırol = message.guild.roles.cache.find(röl => röl.id === kayıtlı)
    const sayı = message.guild.members.cache.filter(member => !member.user.bot).size;

    const embed = new EmbedBuilder()
    .setAuthor({name: "Registration successful.", iconURL: üye.displayAvatarURL()})
    .setDescription(`The user ${üye} has been successfully registered. There were ${sayı} people on the server with him.`)
    .addFields(
        { name: "Admin", value: `${message.author}` },
        { name: "Registry Date", value: `\`${günü} ${ayı} ${yılı} ${saati}\`` }
    )
    .setColor("Random")
    .setFooter(
        { text: "Salwyr | User Registry", iconURL: client.user.displayAvatarURL()}
    )
    .setTimestamp()
    message.channel.send({embeds: [embed]})
    await üye.roles.remove(kayıtsızrol)
    await üye.roles.add(kayıtlırol)


    const log = await db.get(`registryLog_${message.guild.id}`)
    const kayıtLog = message.guild.channels.cache.find(şanel => şanel.id === log)
    if(!log) return;

    const logemb = new EmbedBuilder()
    .setAuthor({name: "A user has been registered.", iconURL: üye.displayAvatarURL()})
    .setDescription(`The user ${üye} has been registered. There were ${sayı} people on the server with him.`)
    .addFields(
        { name: "Admin", value: `${message.author}` },
        { name: "Registry Date", value: `\`${günü} ${ayı} ${yılı} ${saati}\`` }
    )
    .setColor("Random")
    .setFooter(
        { text: "Salwyr | User Registry", iconURL: client.user.displayAvatarURL()}
    )
    .setTimestamp()
    kayıtLog.send({embeds: [logemb]})
}

exports.conf = {
    aliases: [],
    permLevel: 2,
    kategori: "moderation"

}

exports.help = {
    name: "registry",
    description: "Show about the salwyr bot embed",
    usage: "registry"
}