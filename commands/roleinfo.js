const { EmbedBuilder, Permissions } = require('discord.js')

exports.run = async (client, message, args) => {

    let rol;
    if(!args[0]) return message.reply("You need to provide a role.")

    if(args[0] && isNaN(args[0]) && message.mentions.roles.first()) rol = message.mentions.roles.first()
    if(args[0] && isNaN(args[0]) && !message.mentions.roles.first()) {

        rol = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())
        if(!message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())) return message.reply("I couldn't find the role.")
    }

    if(args[0] && !isNaN(args[0])) {

        rol = message.guild.roles.cache.find(e => e.id == args[0])
        if(!message.guild.roles.cache.has(args[0])) return message.reply("I couldn't find the role.")
    }

    let kimderolvar;
    if (rol.members.size > 5) kimderolvar = rol.members.map(e => `<@${e.id}>`).slice(0,5).join(", ") + `and ${rol.members.size - 5} more members`
    if (rol.members.size < 5) kimderolvar = rol.members.map(e => `<@${e.id}>`).join(", ")

    const invite = new EmbedBuilder()
    .setAuthor({ name: `Here is the ${rol.name} information`, iconURL: client.user.displayAvatarURL()})
    .setDescription("I've outlined everything about this role below.")
    .addFields(
        { name: "Name", value: `${rol.name}` , inline: true},
        { name: "ID", value: `${rol.id}` , inline: true},
        { name: "Color", value: `${rol.hexColor}`, inline: true},
        { name: "Mentionable", value: rol.mentioable ? 'Yes' : 'No', inline: true},
        { name: "Role Members Size", value: `${rol.members.size || 0}`, inline: true},
        { name: "Role Members", value: kimderolvar ? kimderolvar : "No one have the role", inline: true},
    )
    .setColor(rol.color)
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
    name: "roleinfo",
    description: "Show about the salwyr bot embed",
    usage: "roleinfo"
}