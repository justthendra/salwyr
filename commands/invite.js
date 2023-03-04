const { EmbedBuilder } = require('discord.js')

exports.run = async (client, message) => {

    const invite = new EmbedBuilder()
    .setAuthor({ name: "🤖 Hello. I am Salwyr, a simple moderation bot built by just thendra.", iconURL: client.user.displayAvatarURL()})
    .setDescription("You can find out how to add me to your server with the link below.\nType `s-help` for help and information.")
    .addFields(
        { name: "İnvite", value: `[**İnvite Me**](https://discord.com/oauth2/authorize?client_id=1068915804818657280&permissions=8&scope=bot)` , inline: true}
    )
    .setColor("#0E0E0E")
    .setThumbnail(client.user.displayAvatarURL())
    .setFooter({
        text: `Requested by ${message.author.username} | Salwyr`,
        iconURL: message.author.displayAvatarURL()
    })
    .setTimestamp()
    message.channel.send({embeds: [invite]})

}

exports.conf = {
    aliases: [],
    permLevel: 0,
    kategori: "general"

}

exports.help = {
    name: "invite",
    description: "Show about the salwyr bot embed",
    usage: "invite"
}