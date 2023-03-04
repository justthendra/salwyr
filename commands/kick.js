const Discord = require('discord.js');
const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));

exports.run = async (client, message, args) => {

    var guild = message.guild;
    var kişi = message.mentions.members.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
    var sebeb = args.slice(1).join(' ');

    if (!message.member.permissions.has("KickMembers")) {
        const yetkinyokaga = new Discord.EmbedBuilder()
        .setDescription("**❌ You must have the `Kick Members` privilege to ban someone from the server.")
        .setColor("#FF0000")
        return message.channel.send({ embeds: [yetkinyokaga]})
    }

    if(!kişi) {
        const etiketyok = new Discord.EmbedBuilder()
        .setDescription("**❌ The person you specified is not on the server or you did not specify any person to kick!**")
        .setColor("#FF0000")
        return message.channel.send({ embeds: [etiketyokamk]})
    }

    if(!message.author.id !== message.guild.ownerID) {
        if(message.member.roles.highest.comparePositionTo(message.mentions.members.first().roles.highest) <= 1) {
            const sıra = new Discord.EmbedBuilder()
            .setDescription("**❌ This person is higher or equal to you in role ranking, you can't kick him for this!**")
            .setColor("#FF0000")
            return message.channel.send({ embeds: [sıra]})
        }
    }

    if(kişi.id == message.guild.ownerID) {
        const arkadaşownermış = new Discord.EmbedBuilder()
        .setDescription("This person is the server owner, you can't kick him!")
        .setColor("#FF0000")
        return message.channel.send({embeds: [arkadaşownermış]}) 
    }     
      
    if(!kişi.bannable) {
        const notbannable = new Discord.EmbedBuilder()
        .setDescription("I can't kick this person!")
        .setColor("#FF0000")
        return message.channel.send({embeds: [notbannable]})
    }

    const data = await db.get(`modLog_${message.guild.id}`)
    const kickLog = message.guild.channels.cache.find(şanel => şanel.id === data);

    if(!data) return console.log(`User ${kişi} has been kicked for ${sebepp}.`)          
          
    var now = new Date()
    var sebepp = null
 
    if(!sebeb) {
        sebepp = "not reason"
    }

    if(sebeb) {
        sebepp = sebeb
    }   
        try {
           /*const sucembeddm = new Discord.EmbedBuilder()
           .setTitle(`Banned`)
           .setDescription(`**Server:** ${guild}\n**Reason:** ${sebepp}\n**Admin:** ${message.author}`)
           .setColor("#FF0000")
           .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: `Salwyr`
        })
           kişi.send({ embeds: [sucembeddm] })*/
           const sucembed = new Discord.EmbedBuilder()
           .setDescription(`User **${kişi}** has been kicked for \`${sebepp}\`.`)
           .setColor("#00B50C")
           .setFooter({
            text: `Salwyr | Kick`,
            iconURL: message.author.displayAvatarURL()
           })
           .setTimestamp()
           message.channel.send({ embeds: [sucembed] })
           const logembed = new Discord.EmbedBuilder()
           .setDescription(`User **${kişi}** has been banned for \`${sebepp}\`.\n\n**Admin:** ${message.author}`)
           .setThumbnail(kişi.displayAvatarURL())
           .setColor("#00B50C")
           .setFooter({
            text: `Salwyr | Ban`,
            iconURL: message.author.displayAvatarURL()
           })
           .setTimestamp()
           kickLog.send({ embeds: [logembed] })
           await delay(100);
           return guild.members.kick(kişi, { reason: sebepp });
        } catch (error) {
           message.reply("**An error was encountered, try again in a few minutes, if this did not solve your problem, report it to a developer!**")
           console.log(error)
        }
};

exports.conf = {
    aliases: [],
    permLevel: 2,
    kategori: "moderation"
};

exports.help = {
    name: "kick",
    description: "kick a user from the server.",
    usage: "kick [@user] [reason]"
};

// just thendra#0001