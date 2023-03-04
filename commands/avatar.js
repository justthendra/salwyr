const { EmbedBuilder } = require('discord.js');

exports.run = (client, message) => {

    const user = message.mentions.users.first() || message.author;

    let avatarEmb = new EmbedBuilder()
    .setAuthor({name: "Here is the person's avatar."})
    .setImage(user.displayAvatarURL())
  
    message.channel.send(avatarEmb)
  
};


  exports.conf = {
    aliases: [],
    permLevel: 0,
    kategori: "fun"

  };

  exports.help = {
    name: 'avatar', 
    description: 'Provides information about commands.',
    usage: 'avatar'
  }