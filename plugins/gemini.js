const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "gemini",
    desc: "ask any question.",
    category: "search",
    react: "🧠",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

let _0x132e0f=await fetchJson(_0x3cda44(0x107)+_0xbbce2c),_0x5298fc=_0x132e0f[_0x3cda44(0xb5)];await _0x57aa40(_0x5298fc[_0x3cda44(0xa2)]);

}catch(e){
console.log(e)
reply(`${e}`)
}
})



