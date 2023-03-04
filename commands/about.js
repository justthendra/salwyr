const { EmbedBuilder } = require('discord.js')

exports.run = async (client, message) => {

    const about = new EmbedBuilder()
    .setAuthor({ name: "🤖 About the Salwyr bot", iconURL: client.user.displayAvatarURL()})
    .setDescription("Hello, I am **Salwyr**#0477, a bot designed to keep your server safe and make moderating fast and easy!\n\nI was written in Discord.js by **just thendra**#0001\nType `s-help` for help and information.")
    .addFields(
        { name: "Support Server", value: `[**Join My Support Server**](https://discord.gg/TCnRDDgPCK)`, inline: true},
        { name: "İnvite", value: `[**İnvite Me**](https://discord.com/oauth2/authorize?client_id=1068915804818657280&permissions=8&scope=bot)` , inline: true}
    )
    .setColor("#0E0E0E")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter({
        text: `Requested by ${message.author.username} | Salwyr`,
        iconURL: message.author.displayAvatarURL()
    })
    .setTimestamp()
    message.channel.send({embeds: [about]})

}

exports.conf = {
    aliases: [],
    permLevel: 0,
    kategori: "general"

}

exports.help = {
    name: "about",
    description: "Show about the salwyr bot embed",
    usage: "about"
}