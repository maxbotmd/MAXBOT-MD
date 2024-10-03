const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    react: "🎶",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
🎶 *MAXBOT SONG DOWNLOADER* 🎶
┌───────────────────
├ *ℹ️ TITLE:* - ${data.title}
├ *🕘 DURATION:* - ${data.timestamp}
├ *📌 POSTED:* - ${data.ago}
├ *👁️‍🗨️ VIEWS:* - ${data.views}
├ *🔗 URL:* - ${data.url}
├ *📝 DESCRIPTION:* - ${data.description}
└───────────────────

*MADE BY AUSTIN MAX 💖*
`
await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{qouted:mek});

//download audio 

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*MADE BY AUSTIN MAX 💖*"},{quoted:mek})
    
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
    react: "📽",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply("please give me url or title")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
📽 *MAXBOT VIDEO DOWNLOADER* 📽

┌───────────────────
├ *ℹ️ TITLE:* - ${data.title}
├ *🕘 DURATION:* - ${data.timestamp}
├ *📌 POSTED:* - ${data.ago}
├ *👁️‍🗨️ VIEWS:* - ${data.views}
├ *🔗 URL:* - ${data.url}
├ *📝 DESCRIPTION:* - ${data.description}
└───────────────────

*MADE BY AUSTIN MAX 💖*
`
await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{qouted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url
const result_ = await getResolutions(link)
  let list = {
    type: 'single_select',
    head: {
      title: "*Select a resolution*",
      subtitle:"",
      footer: `Avaiable resolutions: ${result_.length}`
    },
    body : {
    title:"Select resolution",
    sections:[
    {
    title:"Select a resolution",
    highlight_label:"Highest",
    rows:[]
    }
    ]
    }
  }
  for (var i of result_){
    list.body.sections[0].rows.push({
      title:i.fps60?i.quality+' 60fps':i.quality,
      description:i.size,
      id: handler+"ytv dl;"+(i.fps60?i.quality+'60':i.quality)+';'+link
  })
    }

//send video + document message
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*MADE BY AUSTIN MAX 💖*"},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
} 
})
