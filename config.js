const fs = require("fs-extra");

if (fs.existsSync(".env")) {
    require("dotenv").config({
        path: __dirname + "/.env",
        quiet: true,
    });
}

module.exports = {
    PREFIX: process.env.PREFIX,

    OWNER_NAME: process.env.OWNER_NAME,
    OWNER_NUMBER: process.env.OWNER_NUMBER,
    BOT_NAME: process.env.BOT_NAME,
    FOOTER: process.env.FOOTER,
    CAPTION: process.env.CAPTION,
    BOT_PIC: process.env.BOT_PIC,
    MODE: process.env.MODE,
    TGTOKEN:process.env.TGTOKEN || "7672295852:AAG0SEMHbM1jhkpodxHspJuVT5tiAhXPPpI",
    SESSION_ID: process.env.SESSION_ID,
    VERSION: process.env.VERSION,
    WARN_COUNT: process.env.WARN_COUNT,
    TIME_ZONE: process.env.TIME_ZONE,
    DM_PRESENCE: process.env.DM_PRESENCE,
    GC_PRESENCE: process.env.GC_PRESENCE,
    CHATBOT: process.env.CHATBOT,
    CHATBOT_MODE: process.env.CHATBOT_MODE,
    STARTING_MESSAGE: process.env.STARTING_MESSAGE,

    ANTIDELETE: process.env.ANTIDELETE,
    ANTI_EDIT: process.env.ANTI_EDIT,
    ANTIVIEWONCE: process.env.ANTIVIEWONCE,
    ANTICALL: process.env.ANTICALL,
    ANTICALL_MSG: process.env.ANTICALL_MSG,
    
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS,
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS,
    STATUS_LIKE_EMOJIS: process.env.STATUS_LIKE_EMOJIS,
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS,
    STATUS_REPLY_TEXT: process.env.STATUS_REPLY_TEXT,
    AUTO_REACT: process.env.AUTO_REACT,
    AUTO_REPLY: process.env.AUTO_REPLY,
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES,
    AUTO_BIO: process.env.AUTO_BIO,
    AUTO_BLOCK: process.env.AUTO_BLOCK,
    
    YT: process.env.YT,
    NEWSLETTER_JID: process.env.NEWSLETTER_JID,
    GC_JID: process.env.GC_JID,
    NEWSLETTER_URL: process.env.NEWSLETTER_URL,
    BOT_REPO: process.env.BOT_REPO,
    PACK_NAME: process.env.PACK_NAME,
    PACK_AUTHOR: process.env.PACK_AUTHOR,
    SUDO_NUMBERS: process.env.SUDO_NUMBERS,
    PM_PERMIT: process.env.PM_PERMIT,
    DATABASE_URL: process.env.DATABASE_URL,
    // Postgres URL
    // Free: neon.tech / supabase / render / heroku
    // fallback => ./ali-md/database/database.db
};

let fileName = require.resolve(__filename);

fs.watchFile(fileName, () => {
    fs.unwatchFile(fileName);

    console.log(`Updated File: ${__filename}`);

    delete require.cache[fileName];

    require(fileName);
});
