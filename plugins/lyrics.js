const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();

cmd({
    pattern: "lyric",
    desc: "get son lyrics ",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q && !q.startsWith("https://")) return reply("give me name of artist and title")
    let data = await fetchJson(`${baseUrl}/api/lyrics?url=${q}`)
    if (!result.status) return await message.sendReply('_No results found!_')
    return await message.sendReply(`${ch}Title: "${result.title}"\n\n${result.result}${ch}`);
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
