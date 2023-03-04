const { EmbedBuilder } = require('discord.js')

exports.run = async (client, message, args) => {

    const kişi = args[0];
    if (!message.member.permissions.has("BanMembers")) return message.channel.send("Your authority is not enough!")

    message.guild.bans.fetch()
        .then(bans => {
            if (!bans.has(kişi)) {
                const adamyok = new EmbedBuilder()
                .setDescription("The user is not banned!")
                .setColor("#FF0000")
                .setFooter({
                    text: `Salwyr | Ban Check`,
                    iconURL: message.author.displayAvatarURL()
                })
                .setTimestamp()
                return message.channel.send({embeds: [adamyok]})
            }
        })
    message.guild.bans.fetch(kişi).then(({ user, reason }) => {
        const banneden = new EmbedBuilder()
        .setDescription(`The user **${user.tag}** has been banned from the server due to **\`${reason}\`**.`)
        .setFooter({
            text: `Salwyr | Ban Check`,
            iconURL: message.author.displayAvatarURL()
        })
        .setColor("#FF0000")
        .setTimestamp()
        message.channel.send({embeds: [banneden]})

    })

}

exports.conf = {
    aliases: [],
    permLevel: 0,
    kategori: "moderation"
}

exports.help = {
    name: 'bancheck',
    description: 'Shows server information embed',
    usage: 'bancheck'
}