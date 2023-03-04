const { Client, GatewayIntentBits, Partials, Collection, EmbedBuilder} = require('discord.js');
const { black, bgBlack, bgYellow } = require('colors');
const moment = require('moment');
const fs = require('fs');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});


const config = require('./config.json')
var prefix = config.prefix;

var setup = message => {
};

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir('./commands/', (err, files) => {
    if (err) console.error(err);
    setup(`${files.length} Komut Hazırlandı!`);
    files.forEach(f => {
        let Kodları = require(`./commands/${f}`);
        setup(`${Kodları.help.name} Adlı Komut Hazır.`);
        client.commands.set(Kodları.help.name, Kodları);
        client.commands.set(Kodları.help.name, Kodları);
        Kodları.conf.aliases.forEach(alias => {
            client.aliases.set(alias, Kodları.help.name);
        });
    });
});

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commands/${command}`)];
            let Dosya = require(`./commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, Dosya);
            Dosya.conf.aliases.forEach(alias => {
                client.aliases.set(alias, Dosya.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./commands/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./commands/${command}`)];
            let cmd = require(`./commands/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.permissions.has("ManageMessages")) permlvl = 1;
    if (message.member.permissions.has("BanMembers")) permlvl = 2;
    if (message.member.permissions.has("Administrator")) permlvl = 3;
    if (message.author.id === config.owner) permlvl = 4;
    return permlvl;

}

module.exports = client;

require('./events/message');
require('./events/ready');

//const Server = require('./models/server');
const { QuickDB } = require('quick.db')
const db = new QuickDB();

// R E G I S T R Y - A U T O R O L E | J U S T  T H E N D R A

client.on('guildMemberAdd', async (member, message) => {
    
    //const serverData = Server.findOne({ server_Id: member.guild.id })
    const eleman = client.users.cache.get(member.id)
    const channelid = await db.get(`autoroleKanal_${member.guild.id}`)
    if(!channelid) return console.log(bgYellow(` ${black("Project Salwyr")} ${bgBlack(` Autorole: Someone new has joined the server.`)}`))
    const kanal = member.guild.channels.cache.get(channelid)
    const role = await db.get(`autorole_${member.guild.id}`)
    const rol = await member.guild.roles.cache.get(role)

    let aylar = {
        "01": "Ocak",
        "02": "Şubat",
        "03": "Mart",
        "04": "Nisan",
        "05": "Mayıs",
        "06": "Haziran",
        "07": "Temmuz",
        "08": "Ağustos",
        "09": "Eylül",
        "10": "Ekim",
        "11": "Kasım",
        "12": "Aralık"
}

    let bitiş = member.user.createdAt
    let günü = moment(new Date(bitiş).toISOString()).format('DD')
    let ayı = moment(new Date(bitiş).toISOString()).format('MM').replace("01", "Ocak").replace("02","Şubat").replace("03","Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10","Ekim").replace("11","Kasım").replace("12","Aralık")
    let yılı =  moment(new Date(bitiş).toISOString()).format('YYYY')
    let saati = moment(new Date(bitiş).toISOString()).format('HH:mm')

    let günay = `${günü} ${ayı} ${yılı} ${saati}`  

    let süre = member.user.createdAt
    let gün = moment(new Date(süre).toISOString()).format('DD')
    let hafta = moment(new Date(süre).toISOString()).format('WW')
    let ay = moment(new Date(süre).toISOString()).format('MM')
    let ayy = moment(new Date(süre).toISOString()).format('MM')
    let yıl =  moment(new Date(süre).toISOString()).format('YYYY')
    let yıl2 = moment(new Date().toISOString()).format('YYYY')

    let netyıl = yıl2 - yıl

    let created = ` ${netyıl} yıl  ${ay} ay ${hafta} hafta ${gün} gün önce`

    let kontrol;
    if(süre < 129600000) kontrol = 'Risky!'
    if(süre > 1296000000) kontrol = 'Tried!'


        const üyegelmiş = new EmbedBuilder()
        .setAuthor({name: `${member.guild.name} Auto Role`, iconURL: member.guild.iconURL()})
        .setDescription(`Welcome to the server <@${member.id}>, I gave you the ${rol} role. Have fun.`)
        .addFields(
            { name: "Server Joined Date", value: `${new Date(member.joinedTimestamp).toLocaleDateString()} | ${new Date(member.joinedTimestamp).toLocaleTimeString()}`, inline: true },
            { name: "Account Created Date", value: `${new Date(eleman.createdTimestamp).toLocaleDateString()} | ${new Date(eleman.createdTimestamp).toLocaleTimeString()}`, inline: true },
            { name: "Is the account reliable?", value: `${kontrol}`}
        )
        .setColor("Random")
        .setTimestamp()
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter({
            text: `Salwyr | Auto Role System`, iconURL: client.user.displayAvatarURL()
        })
        member.roles.add(rol)
        kanal.send({embeds: [üyegelmiş]})
})


client.on("guildMemberAdd", async member => {

    const data = await db.get(`kayıtKanal_${member.guild.id}`)
    const kanal = member.guild.channels.cache.find(şanel => şanel.id === data);

    const role = await db.get(`unregisteredId_${member.guild.id}`)
    const rol = member.guild.roles.cache.get(role)

    if(!data) return console.log(bgYellow(` ${black("Project Salwyr")} ${bgBlack(` Registry: Someone new has joined the server.`)}`))

        const embed = new EmbedBuilder()
        .setAuthor({name: "Someone new has joined the server.", iconURL: member.displayAvatarURL()})
        .setDescription(`Hello ${member}! Welcome to the server, you can wait to be registered just by tagging an admin.`)
        .setColor("Random")
        .setFooter({text: "Salwyr | Registry System", iconURL: client.user.displayAvatarURL()})
        .setTimestamp()
        member.roles.add(rol)
        kanal.send({embeds: [embed]})

})

// R E G I S T R Y - A U T O R O L E - E N D | J U S T  T H E N D R A

// M E S S A G E - L O G | J U S T  T H E N D R A

client.on('messageUpdate', async (oldMessage, newMessage) => {

    const bitiş = oldMessage.createdAt
    const günü = moment(new Date(bitiş).toISOString()).format('DD')
    const ayı = moment(new Date(bitiş).toISOString()).format('MM').replace("01", "Janury").replace("02","February").replace("03","March").replace("04", "April").replace("05", "May").replace("06", "June").replace("07", "July").replace("08", "August").replace("09", "September").replace("10","October").replace("11","November").replace("12","December")
    const yılı =  moment(new Date(bitiş).toISOString()).format('YYYY')
    const saati = moment(new Date(bitiş).toISOString()).format('HH:mm')

    const data = await db.get(`mesajLog_${oldMessage.guild.id}`)
    const mesajLog = oldMessage.guild.channels.cache.find(şanel => şanel.id === data);

    if(!data) return console.log(bgYellow(` ${black("Project Salwyr")} ${bgBlack(` Message-Log: A message has been updated.`)}`))

        const embed = new EmbedBuilder()
        .setAuthor({name: "A message has been updated.", iconURL: oldMessage.author.displayAvatarURL()})
        .setDescription(`The user ${oldMessage.author} updated their message.\n\nOld Message: **\`${oldMessage}\`**\nNew Message: **\`${newMessage}\`**\nMessage Channel: ${newMessage.channel}\nMessage Date: **\`${günü} ${ayı} ${yılı} ${saati}\`**`)
        .setColor("Random")
        .setFooter({text: "Salwyr | Message Log", iconURL: client.user.displayAvatarURL()})
        .setTimestamp()
        mesajLog.send({embeds: [embed]})
})

client.on('messageDelete', async (deletedMessage) => {

    const bitiş = deletedMessage.createdAt
    const günü = moment(new Date(bitiş).toISOString()).format('DD')
    const ayı = moment(new Date(bitiş).toISOString()).format('MM').replace("01", "Janury").replace("02","February").replace("03","March").replace("04", "April").replace("05", "May").replace("06", "June").replace("07", "July").replace("08", "August").replace("09", "September").replace("10","October").replace("11","November").replace("12","December")
    const yılı =  moment(new Date(bitiş).toISOString()).format('YYYY')
    const saati = moment(new Date(bitiş).toISOString()).format('HH:mm')

    const data = await db.get(`mesajLog_${deletedMessage.guild.id}`)
    const mesajLog = deletedMessage.guild.channels.cache.find(şanel => şanel.id === data);

    if(!data) return console.log(bgYellow(` ${black("Project Salwyr")} ${bgBlack(` Message-Log: A message has been deleted.`)}`))

        const embed = new EmbedBuilder()
        .setAuthor({name: "A message has been deleted.", iconURL: deletedMessage.author.displayAvatarURL()})
        .setDescription(`The user ${deletedMessage.author} deleted their message.\n\nDeleted Message: **\`${deletedMessage}\`**\nMessage Channel: ${deletedMessage.channel}\nMessage Date: **\`${günü} ${ayı} ${yılı} ${saati}\`**`)
        .setColor("Random")
        .setFooter({text: "Salwyr | Message Log", iconURL: client.user.displayAvatarURL()})
        .setTimestamp()
        mesajLog.send({embeds: [embed]})
})

// M E S S A G E - L O G - E N D | J U S T  T H E N D R A

client.on("messageCreate", async (message) => {

    const args = message.content.split(" ").slice(1);
    if (message.content.startsWith(`${config.prefix}eval`)) {
  
      if (message.author.id !== config.owner)
        return;

        const clean = async (text) => {
            // If our input is a promise, await it before continuing
            if (text && text.constructor.name == "Promise")
              text = await text;
            
            // If the response isn't a string, `util.inspect()`
            // is used to 'stringify' the code in a safe way that
            // won't error out on objects with circular references
            // (like Collections, for example)
            if (typeof text !== "string")
              text = require("util").inspect(text, { depth: 1 });
            
            // Replace symbols with character code alternatives
            text = text
              .replace(/`/g, "`" + String.fromCharCode(8203))
              .replace(/@/g, "@" + String.fromCharCode(8203));
            
            // Send off the cleaned up result
            return text;
            }
  
      try {
        
        const evaled = eval(args.join(" "));
        const cleaned = await clean(evaled);

        message.channel.send(`\`\`\`js\n${cleaned}\n\`\`\``);
      } catch (err) {

        const evaled = eval(args.join(" "));
        const cleaned = await clean(evaled);
        message.channel.send(`\`ERROR\` \`\`\`xl\n${cleaned}\n\`\`\``);
      }
  
    }
  });

const express = require('express');
const app = express();
const http = require('http');
app.get('/', (request, response) => {
    response.sendStatus(200);
});
app.listen(4000);

/*client.on('ready', () => {
    //client.user.setPresence({activities: [{name: 'Coming Soon 🌙 | Thendra Development', type: ActivityType.Streaming}]})
    console.log(blue(`[just thendra]: ${green(`${client.user.tag} ismi ile giriş yapıldı.`)}`));
    client.user.setStatus('dnd');
    client.user.setPresence({activities: [{
        name: 'Coming Soon 🌙 | Thendra Development',
        type: ActivityType.Streaming,
        url: 'https://www.twitch.tv/thendrra'
    }]})
})*/

client.config = require('./config.json');
client.login(client.config.token);