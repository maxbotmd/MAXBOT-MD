const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iVMxALKb#Jx_yARt6VJBGTiOQRSwjKjfPTTrsTdgt5m-1RgsAujo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/d0fdb53f9f22eefd486cb.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am MAXBOT-MD, I am alive now!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public", 
}; 
