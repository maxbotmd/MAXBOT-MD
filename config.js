const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "iVMxALKb#Jx_yARt6VJBGTiOQRSwjKjfPTTrsTdgt5m-1RgsAujo",
MONGODB: process.env.MONGODB || "mongodb+srv://maxaustin37:Chiputula.123@cluster0.rk3qd.mongodb.net/",

}; 
