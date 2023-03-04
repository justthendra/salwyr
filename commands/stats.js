const Discord = require('discord.js');
const moment = require("moment");
const osutils = require('os-utils');
const os = require('os');
require("moment-duration-format");
const config = require('../config.json');
const package = require('../package.json')

const version = package.version;
    
exports.run = async (client, message, args) => {
    const duration = moment.duration(client.uptime).format(" D [Day], H [Hour], m [Minute], s [Seconds]");
    osutils.cpuUsage(function(v) {
    const istatistikozel = new Discord.EmbedBuilder()
    .setColor("BLACK")
    .setAuthor({ name: `${client.user.username} Statistics`, iconURL: client.user.displayAvatarURL()})
    .setDescription("Here are **Salwyr's** stats")
    .addFields(
        { name: "<:gelistirici:1069570968370036787> | Developer", value: ":white_small_square: **Owner and Developer** [just thendra](https://github.com/thendra-s)"},
        { name: ":earth_americas: | Informations", value: `\n :white_small_square: Server Count: **${client.guilds.cache.size}** \n :white_small_square: User Count: **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n :white_small_square: Channel Count: **${client.channels.cache.size}** \n :white_small_square: Ping: **${client.ws.ping}ms** \n :white_small_square: Uptime: **${duration}** \n :white_small_square: Start Time: **29 January 2023 19:51:32** `},
        { name: "<:versiyon:1069571717976035429> | Versions", value: `\n :white_small_square: Discord.js Version: **v${Discord.version}** \n :white_small_square: Node.js Version: **${process.version}** \n :white_small_square: Database: **MongoDB** \n :white_small_square: Version: **${version}** \n :white_small_square: Module Count: **24** \n :white_small_square: Commands Count: **${client.commands.size}**`},
        { name:`<:sunucu:1069572280801300500> | System`, value: `:white_small_square: CPU: **${os.cpus().map(i => `${i.model}`)[0]}** \n :white_small_square: CPU Usage: **${(v * 100).toString().split(".")[0] + "." + (v * 100).toString().split(".")[1].split('')[0] + (v * 100).toString().split(".")[1].split('')[1]}%** \n :white_small_square: VPS Cores: **${osutils.cpuCount() + " Cores"}** \n :white_small_square: RAM Usage: **${(process.memoryUsage().heapUsed / 2024 / 2024).toFixed(2)}/2024MB** \n :white_small_square: OS: **${os.platform()}** \n :white_small_square: Bit: **${os.arch()}**`},
        { name: `<:cmd:1069573779694559252> | Extra Informations`, value: `:white_small_square: Approval Status: **Not Approved** <:onaysiz:1069582596322906152> \n :white_small_square: Database Status: **Clear** <:onayli:1069582440122830869>`}
        )
    message.channel.send({ embeds: [istatistikozel]})
    })   
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['stat', 'istatistik', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
  kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'stats'
};

// just thendra#0001