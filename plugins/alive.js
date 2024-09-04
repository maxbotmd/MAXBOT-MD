const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config  = await readEnv();
let desc = ` Welcome to MAXBOT-MD 


`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:desc},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})



