const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', (msg) => {
    console.log('Client is ready!');

    if (msg.body === '!ping') {
        msg.reply('Pong')
    }


});

client.initialize();