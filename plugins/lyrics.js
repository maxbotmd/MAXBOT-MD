const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "lyrics",
    desc: "get song lyrics.",
    category: "search",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let handler = async (m, {conn, text }) => {
  let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
   if (!teks) throw `✳️ Enter the name of the song`
   try {
  let res = await fetch(global.API('https://some-random-api.com', '/lyrics', { title: teks }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendFile(m.chat, json.thumbnail.genius, null, `
▢ *${json.title}*
*${json.author}*\n
${json.lyrics}`, m)
m.react(done)
   
}catch(e){
console.log(e)
reply(`${e}`)
}
})
