const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "GNIH1IYK#7RGy7hzA0ojo1BKR0wk_kX1uiXHCzGIAutMPzYleNjM",
ALIVE_IMG: process.eve.ALIVE_IMG || "https://telegra.ph/file/d0fdb53f9f22eefd486cb.jpg",
ALIVE_MSG: process.eve.ALIVE_MSG || "Hello, I am MAXBOT-MD, I am alive now!",
};
