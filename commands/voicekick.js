const { EmbedBuilder } = require('discord.js')

exports.run = async (client, message, args) => {

    if(!message.member.permissions.has("KickMembers")) return message.reply("You need `Kick Members` permission to execute this command.");
    const user = message.mentions.members.first() || client.users.resolve(args[0]) || client.users.cache.find(u => u.username === args[0]) || client.users.cache.get(args[0]);
    if(!user) return message.reply("You did not specify a user.");
    const voiceChannel = message.member.channel;


    const embed = new EmbedBuilder()
    .setAuthor({ name: "A user has been kicked from the voice channel.", iconURL: user.displayAvatarURL()})
    .setDescription(`User ${user} has been kicked from the channel.`)
    .setColor("#00B50C")
    .setFooter({
        text: `Salwyr | Voice Kick`,
        iconURL: client.user.displayAvatarURL()
    })
    .setTimestamp()

    message.mentions.members.each((user) => {
        if (!user.voice.channel)
          return message.channel.send(`${user} not in voice chat.`);
      
        user.voice
          .disconnect()
          .then((member) =>
            message.channel.send({embeds: [embed]})
          )
          .catch(console.error);
      });
    
}

exports.conf = {
    aliases: [],
    permLevel: 1,
    kategori: "moderation"

}

exports.help = {
    name: "voicekick",
    description: "Show about the salwyr bot embed",
    usage: "voicekick"
}