
const config = require('../config')
const {cmd , commands} = require('../command')
const { default: axios } = require('axios');
const fs = require('fs');

cmd({
    pattern: "tiktok",
    desc: "Download tiktok vid",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  if (!q) return reply("please give me url")
  
  const videoUrl = arg.join(" ");

 let data = await axios.get('https://vihangayt.me/download/tiktok?url='+ videoUrl) ;

  let tik = data.data.data

      // Envoi du message avec le thumbnail de la vidéo
      const caption = `
Author: ${tik.author}
Description: ${tik.desc}
      `;

         
 await conn.sendMessage(dest, { video: { url: tik.links[0].a} , caption : caption },{quoted : mek});    

}catch(e){
console.log(e)
reply(`${e}`)
}
})
