const fs = require('fs'),
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://stark-md-pair.onrender.com";

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "STARK-MD~rMdSWABR#XF551ed8184AEt_q8Q25PGpI5f5PtuSoInDL0MNDx-M", // Add sess Id here especially when deploying on panels else use app.json and .env file...
    SUDO_NUMBERS: process.env.SUDO_NUMBERS || "254778620961", // Add multiple numbers with country codes without (+), separated by comma
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // ✅ only ONE, default = true
    AUTO_STATUS_VIEWS: process.env.AUTO_STATUS_VIEWS || "true",
    AUTO_STATUS_REACTS: process.env.AUTO_STATUS_REACTS || "true",
    AUTO_STATUS_EMOJIS: process.env.AUTO_STATUS_EMOJIS || "❤️,💀,🌚,🌟,🔥,❤️‍🩹,🌸,🍁,🍂,🦋,🍥,🍧,🍨,🍫,🍭,🎀,🎐,🎗️,👑,🚩,🇵🇰,🍓,🍇,🧃,🗿,🎋,💸,🧸,🦢,✨,🌾,🌊,⚡,🌏,🕸️,🎀,🪄,🌝,🌜,💫,🤍,🖤,🤎,💜,💙", // Input your custom emojis
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ STATUS VIEWED BY G̸E̸N̸Z̸K̸E̸N̸Y̸A̸", // Custom message
    MODE: process.env.MODE || "public", // Options: private, public, inbox, groups
    TGTOKEN:process.env.TGTOKEN || "7672295852:AAG0SEMHbM1jhkpodxHspJuVT5tiAhXPPpI",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "254758443111", // Only 1 owner number here, others add to sudo numbers
    OWNER_NAME: process.env.OWNER_NAME || "G̸E̸N̸Z̸K̸E̸N̸Y̸A̸^᪲᪲᪲輪", // Custom name
    PACK_AUTHOR: process.env.PACK_AUTHOR || "G̸E̸N̸Z̸K̸E̸N̸Y̸A̸", // Custom
    PACK_NAME: process.env.PACK_NAME || "G̸E̸N̸Z̸K̸E̸N̸Y̸A̸",
    PREFIX: process.env.PREFIX || ".",
    VERSION: process.env.VERSION || "7.0.0",
    ANTI_LINK: process.env.ANTI_LINK || "false", // true = kick, delete = delete, warn = warn
    ANTI_CALL: process.env.ANTI_CALL || "true",
    ANTIBAD: process.env.ANTIBAD || "true",
    BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Will be deleted if ANTIBAD is true
    ANTI_CALL_MSG: process.env.ANTI_CALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐒𝐓𝐀𝐑𝐊-𝐌𝐃ှ᪳𓆪", // Don't change
    BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", // Don't change
    AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
    AUTO_BIO: process.env.AUTO_BIO || "false",
    AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "G̸E̸N̸Z̸K̸E̸N̸Y̸A̸",
    WELCOME: process.env.WELCOME || "false",
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // true = bluetick all messages, commands = bluetick commands only
    AUTO_BLOCK: process.env.AUTO_BLOCK || "", // Multiple country codes separated by comma
    PRESENCE: process.env.PRESENCE || "typing", // typing, recording, online, null
    TIME_ZONE: process.env.TIME_ZONE || "Africa/Nairobi", // Enter your timezone
};

// Auto-reload this config when file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`Update '${__filename}'`);
    delete require.cache[file];
    require(file);
});
