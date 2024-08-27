const config = require('../config')
const {cmd , commands} = require('../command')
const axios = require('axios')
const api = 'https://api.maher-zubair.xyz/'
const key = '232ce576cc78a1dfab' // replace with your vip key

cmd({
    pattern: "diffuse",
    desc: "creat an ai image.",
    category: "convert",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

exports.StableDiffusion = function (prompt) {
    return new Promise(async (resolve, reject) => {

        await axios.get(api + 'ai/diffusion2', {
            params: {
                apikey: key,
                prompt: prompt
            },
            responseType: 'arraybuffer'
        })
            .then(response => {
                resolve(response.data)
            })
            .catch(e => {
                reject(e)
            })
    })

}catch(e){
console.log(e)
reply(`${e}`)
}
})



