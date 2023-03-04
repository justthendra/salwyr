const { EmbedBuilder } = require('discord.js')

exports.run = async (client, message, args) => {

    let sunucu = message.member.guild;

    const ülkeler = {
        brazil: 'Brazil',
        europe: 'Europe',
        hongkong: 'Hong Kong',
        india: 'India',
        japan: 'Japan',
        russia: 'Russia',
        singapore: 'Singapore',
        southafrica: 'South Africa',
        sydeny: 'Sydeny',
        'us-central': 'US Central',
        'us-east': 'US East',
        'us-west': 'US West',
        'us-south': 'US South',
        turkey: 'Türkiye',
        null: 'English'
    };

        const emb = new EmbedBuilder()
        .setAuthor({ name: `${sunucu.name}`, iconURL: sunucu.iconURL()})
        .setDescription("This server's information is below.")
        .addFields(
            { name: "Server Name", value: `${sunucu.name}`, inline: true},
            { name: "ID", value: sunucu.id, inline: true},
            { name: "Owner", value: `<@${sunucu.ownerId}>`, inline: true},
            { name: "Members", value: `${message.guild.members.cache.filter((m) => !m.user.bot).size}`, inline: true},
            { name: "Bots", value: `${message.guild.members.cache.filter((m) => m.user.bot).size}`, inline: true},
            { name: "Server Icon", value: `**[JPG](${sunucu.iconURL()})**`, inline: true},
            { name: "Server Created Date", value: `${new Date(sunucu.createdTimestamp).toLocaleDateString()} | ${new Date(sunucu.createdTimestamp).toLocaleTimeString()}`, inline: true},
        )
        .setFooter({
            text: `Requested by ${message.author.username}`,
            iconURL: message.author.displayAvatarURL()
        })
        .setTimestamp()
        .setColor("Random")
        message.channel.send({embeds: [emb]})

}

exports.conf = {
    aliases: [],
    permLevel: 0,
    kategori: "general"
}

exports.help = {
    name: 'serverinfo',
    description: 'Shows server information embed',
    usage: 'serverinfo'
}