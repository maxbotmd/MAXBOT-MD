const config = require('../config')
const {cmd , commands} = require('../command')
const fs = require('fs');
cmd({
    pattern: "tiktok",
    desc: "Download tiktok vid",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, arg, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

  if (!arg[0]) {
    repondre(`how to use this command:\n ${prefix}tiktok tiktok_video_link`);
    return;
  }

  const videoUrl = arg.join(" ");

 let data = await axios.get('https://vihangayt.me/download/tiktok?url='+ videoUrl) ;

  let tik = data.data.data

      // Envoi du message avec le thumbnail de la vidéo
      const caption = `
Author: ${tik.author}
Description: ${tik.desc}
      `;

         
      zk.sendMessage(dest, { video: { url: tik.links[0].a} , caption : caption },{quoted : ms});    

}catch(e){
console.log(e)
reply(`${e}`)
}
})
