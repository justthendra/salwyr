const Discord = require('discord.js')
const config = require('../config.json') 

exports.run = async (client, message, args) => {
    var prefix = config.prefix;


    if(args[0] === "General" || args[0] === "general") {
        let Genel = new Discord.EmbedBuilder()
        .setAuthor({ name: 'I am currently showing general commands', iconURL: `${client.user.displayAvatarURL()}`, url: 'https://discord.gg/TCnRDDgPCK' })
        .setColor('#2667FF')
        .addFields(
            { name: `\`${prefix}about\``, value: `**Description:**\n> It throws the information embed about the bot.`},
            { name: `\`${prefix}userinfo\``, value: `**Description:**\n> Shows the information about the user you tagged.`},
            { name: `\`${prefix}invite\``, value: `**Description:**\n> Bot throws invite embed.`},
            { name: `\`${prefix}avatar\``, value: `**Description:**\n> Shows the avatar of the user you tagged.`},
        )
        .setFooter({ text: `Salwyr | Requested by ${message.author.tag}.` , iconURL: `${message.author.displayAvatarURL()}` })
        return message.channel.send({embeds : [Genel]})
    }

    /*if(args[0] === "Fun" || args[0] === "fun") {
        let Eğlence = new Discord.EmbedBuilder()
        .setAuthor({ name: 'I am currently showing fun commands', iconURL: `${client.user.displayAvatarURL()}`, url: 'https://discord.gg/TCnRDDgPCK' })
        .setColor('#2667FF')
        .addFields(
            { name: `\`${prefix}avatar\``, value: `**Description:**\n> Display your avatar or the avatar of the person you tag.`},
        )
        .setFooter({ text: `Salwyr | Requested by ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` })
        return message.channel.send({embeds : [Eğlence]})
    }*/

    if(args[0] === "Server" || args[0] === "server") {
        let Server = new Discord.EmbedBuilder()
        .setAuthor({ name: 'I am currently showing moderation commands', iconURL: `${client.user.displayAvatarURL()}`, url: 'https://discord.gg/TCnRDDgPCK' })
        .setColor('#2667FF')
        .addFields(
            { name: `\`${prefix}userinfo @user\``, value: `**Description:**\n> Shows the information about the user you tagged.`},
            { name: `\`${prefix}roleinfo @role\``, value: `**Description:**\n> Shows the information about the role you tagged.`},
            { name: `\`${prefix}serverinfo\``, value: `**Description:**\n> Shows the information about the server.`},
            { name: `\`${prefix}prefix <new prefix>\``, value: `**Description:**\n> Makes the sign you specify the prefix of the bot.`},
            { name: `\`${prefix}slowmode <seconds>\``, value: `**Description:**\n> Sets the channel's message timeout for the seconds you specify.`},
        )
        .setFooter({ text: `Salwyr | Requested by ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` })
        return message.channel.send({embeds : [Server]})
    }

    if(args[0] === "Moderation" || args[0] === "moderation") {
        let Moderasyon = new Discord.EmbedBuilder()
        .setAuthor({ name: 'I am currently showing moderation commands', iconURL: `${client.user.displayAvatarURL()}`, url: 'https://discord.gg/TCnRDDgPCK' })
        .setColor('#2667FF')
        .addFields(
            { name: `\`${prefix}autorole help\``, value: `**Description:**\n> Shows the use of the Autorole system.`},
            { name: `\`${prefix}ban\``, value: `**Description:**\n> Ban a user from the server.`},
            { name: `\`${prefix}unban\``, value: `**Description:**\n> Unban a user from the server.`},
            { name: `\`${prefix}bancheck\``, value: `**Description:**\n> Indicates whether the user you have identified has been banned from the server.`},
            { name: `\`${prefix}kick\``, value: `**Description:**\n> Kick a user from the server.`},
            { name: `\`${prefix}mute\``, value: `**Description:**\n> It mutes the user you tagged for the duration you specify..`},
            { name: `\`${prefix}unmute\``, value: `**Description:**\n> Unmutes the user you tagged.`},
            { name: `\`${prefix}lock\``, value: `**Description:**\n> It locks the channel you specified and no one can write to that channel..`},
            { name: `\`${prefix}unlock\``, value: `**Description:**\n> Unlocks the channel you specified.`},
            { name: `\`${prefix}moveuser\``, value: `**Description:**\n> Moves the user you tagged to the channel you tagged.`},
            { name: `\`${prefix}voicekick\``, value: `**Description:**\n> Kicks the user you tagged from the channel.`},
        )
        .setFooter({ text: `Salwyr | Requested by ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` })
        return message.channel.send({embeds : [Moderasyon]})
    }

    if(args[0] === "Logs" || args[0] === "logs") {
        let Moderasyon = new Discord.EmbedBuilder()
        .setAuthor({ name: 'I am currently showing logs commands', iconURL: `${client.user.displayAvatarURL()}`, url: 'https://discord.gg/TCnRDDgPCK' })
        .setColor('#2667FF')
        .addFields(
            { name: `\`${prefix}modlog set/reset #channel\``, value: `**Description:**\n> Set moderation logs the channel you specify.`},
            { name: `\`${prefix}voicelog set/reset #channel\``, value: `**Description:**\n> Set voice logs the channel you specify.`},
            { name: `\`${prefix}messagelog set/reset #channel\``, value: `**Description:**\n> Set message logs the channel you specify.`},
        )
        .setFooter({ text: `Salwyr | Requested by ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` })
        return message.channel.send({embeds : [Moderasyon]})
    }

    if(args[0] === "Owner" || args[0] === "owner" ) {
        let Sahip = new Discord.EmbedBuilder()
        .setAuthor({ name: 'I am currently showing owner commands', iconURL: `${client.user.displayAvatarURL()}`, url: 'https://discord.gg/TCnRDDgPCK' })
        .setColor('#2667FF')
        .addFields(
            { name: `\`${prefix}ping\``, value: `**Description:**\n> Show bot ping.`},
            { name: `\`${prefix}stats\``, value: `**Description:**\n> Shows the bot's stats.`},
        )
        .setFooter({ text: `Salwyr | Requested by ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` })
        return message.channel.send({embeds : [Sahip]})
    }
  
    let embed = new Discord.EmbedBuilder()
        .setAuthor({ name: 'Help', iconURL: `${client.user.displayAvatarURL()}`, url: 'https://discord.gg/TCnRDDgPCK' })
        .setColor('#FFFB05')
        .setDescription(`**Example Usage:** \`${prefix}help category\` \n **Example:** \`${prefix}help general\``)
	      .addFields(
		    { name: 'Categories', value:'All Categories'},
		    { name: `${prefix}help general`, value: 'General Commands', inline: false },
		    { name: `${prefix}help logs`, value: 'Logs Commands', inline: false },
            { name: `${prefix}help moderation`, value: 'Moderation Commands', inline: false },
		    { name: `${prefix}help server`, value: 'Server Commands', inline: false },
	      )
        .setFooter({ text: `Salwyr | Requested by ${message.author.tag}` , iconURL: `${message.author.displayAvatarURL()}` })
        return message.channel.send({embeds : [embed]})
}

  exports.conf = {
    aliases: ['cmds'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "general" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'help',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Provides information about commands.', //Komutun açıklaması
    usage: 'help', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };

  // just thendra#0001