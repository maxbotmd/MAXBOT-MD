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
if (!q && !q.startsWith("https://")) return reply("give me name of artist and title")
    let data = await getJson(`https://api.maher-zubair.xyz/search/lyrics?apikey=232ce576cc78a1dfab&q=pain${encodeURIComponent(match[1])}`)
    if (!result.status) return await message.sendReply('_No results found!_')
    return await message.sendReply(`${ch}Title: "${result.title}"\n\n${result.result}${ch}`);
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
