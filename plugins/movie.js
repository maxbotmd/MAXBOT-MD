const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')

//====MAXBOT-MD=======
let cap = 'MAXBOT-MD 💫'

// <========FETCH API URL========>
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson(`https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json`)
    baseUrl = baseUrlGet.api
})();


//fb downloader
cmd({
    pattern: "movie",
    alias: ["movie"],
    desc: "download movies",
    category: "download",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("give me movie url")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/moviedl?url=${q}`)
        reply("*Downloading...*")
        //send video (hd,sd)
        await conn.sendMessage(from, { video: { url: data.data.hd }, mimetype: "video/mp4", caption: `- QUALITY HD\n\n> ${cap}` }, { quoted: mek })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
