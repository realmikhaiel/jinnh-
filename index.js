const chalk = require('chalk');
const {WAConnection} = require('@adiwajshing/baileys');
const {StringSession} = require('./jimbru/');
const fs = require('fs');

async function startconn() {
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [3, 3430, 9]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;
    
    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Mikhaiel')}
${chalk.white.italic('Made By ')}${chalk.red.bold('MIKHAIEL')}
${chalk.blue.italic('Loading QR CODE...🎉')}`);
    });
    

    conn.on('open', () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold('YOUR SESSION: '), Session.createStringSession(conn.base64EncodedAuthInfo())
        );
        
        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `SESSION="${st}"`);
        }

        console.log(
            chalk.red.bold('⚠ COPY THIS CODE, IT IS IMPORTANT... ⚠'))
            
        console.log(
            chalk.blue.bold('Thank You For Using conn 💖'))

        process.exit(0);
    });

    await conn.connect();
}

startconn()
