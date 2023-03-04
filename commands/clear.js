const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("ManageMessages")) return message.reply("You Do Not Have Permission To Use This Command!").then(message => setTimeout(() => message.delete(), 6000))
    if(!args[0]) return message.channel.send("Please Write the Amount of Messages to Delete!").then(message => setTimeout(() => message.delete(), 6000))
    message.channel.bulkDelete(args[0]).then(() => {
        const embed = new Discord.EmbedBuilder()
        .setDescription(`**${args[0]}**, Message Successfully Deleted.`)
        .setFooter({
            iconURL: client.user.displayAvatarURL(),
            text: `Requested by ${message.author.tag}`
        })
        .setColor("BLACK")
        .setTimestamp()
        message.channel.send({embeds : [embed]}).then(message => setTimeout(() => message.delete(), 6000))
    })
}

  exports.conf = {
    aliases: ['delete'], //Komutun farklı yazılışlarla kullanımları
    permLevel: 0, //Komutun kimler kullanacağını belirtir (bot.js dosyasından en aşağı inerseniz gerekli yeri görürsünüz)
    kategori: "server" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız

  };

  exports.help = {
    name: 'clear',  //adını belirtin (kullanmak için gereken komut) Örneğin Otorol
    description: 'Delete the amount of messages you specify.', //Komutun açıklaması
    usage: 'clear', //Komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
  };

  // just thendra#0001