const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os") 
const {runtime} = require('../lib/functions') 
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "Check up time, ram usage and more",
    category: "main",
    react:"⚙️",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
*⚙️MAXBOT-MD SYSTEM STATUS⚙️*

*🕑UPTIME:* - ${runtime(process.uptime())} 
*🧮RAM USAGE:* - ${(process.memoryUsage().heapUsed /1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*🖥HOSTNAME:* - ${os.hostname()}
*👤OWNER:* - Austin Max
`
return reply(`${status}`) 
  
}catch(e){
console.log(e)
reply(`${e}`) 

} 
}) 

