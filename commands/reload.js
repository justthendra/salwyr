const { EmbedBuilder } = require('discord.js')

exports.run = async (client, message, args) => {

    if (!args.length) return message.channel.send("You must specify a command name.");
    const commandName = args[0].toLowerCase();
    const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    const embed = new EmbedBuilder()
    .setAuthor({ name: "Command not found.", iconURL: message.author.displayAvatarURL()})
    .setDescription(`Hey **Thendra**, The command \`${commandName}\` was not found, are you sure you spelled it correctly?`)
    .setColor("#C90000")
    .setFooter({
        text: `Salwyr | Reload Command`,
        iconURL: client.user.displayAvatarURL()
    })
    .setTimestamp()
    if (!command) return message.channel.send({embeds: [embed]});
        
    delete require.cache[require.resolve(`./${args[0]}.js`)];


    try {
        const newCommand = require(`./${args[0]}.js`);
        message.client.commands.set(newCommand.name, newCommand);

        const embed2 = new EmbedBuilder()
        .setAuthor({ name: "A command has been renewed.", iconURL: message.author.displayAvatarURL()})
        .setDescription(`The command ${args[0]} has been renewed, the command is ready to be used.`)
        .setColor("#00B50C")
        .setFooter({
            text: `Salwyr | Reload Command`,
            iconURL: client.user.displayAvatarURL()
        })
        .setTimestamp()
        message.channel.send({embeds: [embed2]});

    } catch (error) {
        console.error(error);
        message.channel.send(`There was an error while reloading a command \`${args[0]}\`:\n\`${error.message}\``);
    }
}

exports.conf = {
    aliases: [],
    permLevel: 4,
    kategori: "owner"

}

exports.help = {
    name: "reload",
    description: "Show about the salwyr bot embed",
    usage: "reload"
}