const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
✨️ *MAXBOT SONG DOWNLOADER* ✨️

*🎶Title:* ${data.title}
*📝Description:* ${data.description}
*🕑Duration:* ${data.timestamp}
*📅Posted:* ${data.ago}
*👁Views:* ${data.views}

*MADE BY AUSTIN MAX 💖*
`
await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{qouted:mek});

//download audio 

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await react("⬇️");
    try {
        switch (input) {
            case '1':
                await react("⬆️");
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*MADE BY AUSTIN MAX 💖*"},{quoted:mek})
await react("🎶")
                
}catch(e){
console.log(e)
reply(`${e}`)
} 
})

//===========================video-dl========================
cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
✨️ *MAXBOT VIDEO DOWNLOADER* ✨️

*🎶Title:* ${data.title}
*📝Description:* ${data.description}
*🕑Duration:* ${data.timestamp}
*📅Posted:* ${data.ago}
*👁Views:* ${data.views}

*MADE BY AUSTIN MAX 💖*
`
await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{qouted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document message
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*MADE BY AUSTIN MAX 💖*"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
} 
})
