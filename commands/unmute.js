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


    const hataEmb = new EmbedBuilder()
    .setDescription("Something went wrong. Please try again later or contact Bot Developer.")
    .setColor("Red")
    .setTimestamp()

    try {

    const susturmaKalktı = new EmbedBuilder()
    .setAuthor({name: "A user has been unmuted.", iconURL: etiket.displayAvatarURL()})
    .setDescription(`The user ${etiket} has been unmuted.`)
    .setFooter({
        text: `Salwyr | Unmute`,
        iconURL: message.author.displayAvatarURL()
       })
    .setTimestamp()
    .setColor("Green")
    message.channel.send({embeds: [susturmaKalktı]})

    const muteLog = new EmbedBuilder()
    .setAuthor({name: "A user has been unmuted.", iconURL: etiket.displayAvatarURL()})
    .setDescription(`The user ${etiket} has been unmuted.`)
    .addFields(
        { name: "Admin", value: `${message.author}`}
    )
    .setFooter({
        text: `Salwyr | Mod Log`,
        iconURL: message.author.displayAvatarURL()
       })
    .setTimestamp()
    .setColor("Green")
    banLog.send({embeds: [muteLog]})
    await etiket.timeout(null)
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
    name: "unmute",
    description: "Ban a user from the server.",
    usage: "unmute [@user] [reason]"
};

// just thendra#0001