const { EmbedBuilder } = require('discord.js')
const { QuickDB } = require('quick.db')
const db = new QuickDB();
const { bgYellow, bgBlack, black } = require('colors');
const ms = require('ms');

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("MuteMembers")) return message.channel.send("You are not authorized to use this command.");

    const etiket = message.mentions.members.first()
    const data = await db.get(`modLog_${message.guild.id}`)
    const banLog = message.guild.channels.cache.find(şanel => şanel.id === data);

    if(!data) return console.log(bgYellow(` ${black("Project Salwyr")} ${bgBlack(` Mute: A user has been muted.`)}`))

    const zaman = args[1];
    const sebep = args[2];
    const süre = ms(zaman);

    if(!sebep) {
        sebep = "Not Reason"
    }

    const hataEmb = new EmbedBuilder()
    .setDescription("Something went wrong. Please try again later or contact Bot Developer.")
    .setColor("Red")
    .setTimestamp()

    try {

    const susturuldu = new EmbedBuilder()
    .setAuthor({name: "A user has been muted.", iconURL: etiket.displayAvatarURL()})
    .setDescription(`The user ${etiket} has been muted.`)
    .addFields(
        { name: "Reason", value: `${sebep}`, inline: true},
        { name: "Duration", value: `${süre}`, inline: true},
    )
    .setTimestamp()
    .setFooter({
        text: `Salwyr | Mute`,
        iconURL: message.author.displayAvatarURL()
       })
    .setColor("Green")
    message.channel.send({embeds: [susturuldu]})

    const muteLog = new EmbedBuilder()
    .setAuthor({name: "A user has been muted.", iconURL: etiket.displayAvatarURL()})
    .setDescription(`The user ${etiket} has been muted.`)
    .addFields(
        { name: "Reason", value: `${sebep}`, inline: true},
        { name: "Duration", value: `${süre}`, inline: true},
        { name: "Admin", value: `${message.author}`}
    )
    .setFooter({
        text: `Salwyr | Mod Log`,
        iconURL: message.author.displayAvatarURL()
       })
    .setTimestamp()
    .setColor("Green")
    banLog.send({embeds: [muteLog]})
    await etiket.timeout(süre, sebep)
    } catch (err) {
        console.log(err)
        message.channel.send({embeds: [hataEmb]})
    }
}

exports.conf = {
    aliases: [],
    permLevel: 2,
    kategori: "moderation"
};

exports.help = {
    name: "mute",
    description: "Ban a user from the server.",
    usage: "mute [@user] [reason]"
};

// just thendra#0001