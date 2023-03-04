const client = require("../salwyr");
const { ActivityType } = require('discord.js')
const { bgBlue, bgBlack, bgGreen, bgRed, bgMagenta, black } = require('colors');
const config = require('../config.json')

client.on('ready', async () => {

    /*const mongoose = require('mongoose');

    mongoose.connect(config.mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    
    mongoose.connection.on('connected', () => {
        console.log(bgGreen(` Project Salwyr ${bgBlack(` MongoDB ile bağlantı kuruldu.`)}`));
    })
    
    mongoose.connection.on('error', () => {
        console.log(bgRed(` Project Salwyr ${bgBlack(` MongoDB ile bağlantı kurulamadı.`)}`));
    })*/

    client.user.setStatus('dnd');
    client.user.setPresence({activities: [{
        name: 'Coming Soon 🌙 | Thendra Development',
        type: ActivityType.Streaming,
        url: 'https://www.twitch.tv/thendrra'
    }]})
    console.log(bgMagenta(` ${black("Project Salwyr")} ${bgBlack(` Tüm komutlar yenilendi.`)}`))
    console.log(bgGreen(` ${black("Project Salwyr")} ${bgBlack(` ${client.commands.size} komut aktif.`)}`))
    console.log(bgBlue(` ${black("Project Salwyr")} ${bgBlack(` ${client.user.username} ismi ile giriş yapıldı.`)}`));
})