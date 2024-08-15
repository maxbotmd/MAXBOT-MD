const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "aIBEwAqD#tSwn_LMxy1lfBU8r-wY6k5Y4JIJttzHd6mynozh7NqY",
ALIVE_IMG: process.eve.ALIVE_IMG || "https://telegra.ph/file/d0fdb53f9f22eefd486cb.jpg",
ALIVE_MSG: process.eve.ALIVE_MSG || "Hello, I am MAXBOT-MD, I am alive now!",
};
