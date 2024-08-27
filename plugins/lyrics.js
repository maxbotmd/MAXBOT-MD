const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')


cmd({
    pattern: "lyric",
    desc: "get son lyrics ",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!match[1]) return await message.sendReply("_Need query!_");
    let result = await getJson(`https://raganork.tk/api/lyrics?query=${encodeURIComponent(match[1])}`)
    if (!result.status) return await message.sendReply('_No results found!_')
    let ch = '```'
    return await message.sendReply(`${ch}Title: "${result.title}"\n\n${result.result}${ch}`);
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
