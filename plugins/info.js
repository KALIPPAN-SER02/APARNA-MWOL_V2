//PLUGIN BY SOURAVKL11 COPY WITH CREDIT

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'info', fromMe: false, desc: 'Shows bot information and creator info'}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = Config.LOGOSK;
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `` + Config.BOTSK + ` *BOT CREATED BY* ` + Config.PLK +`
    
    ----- ` + Config.BOTSK + ` -----
    
╭─➤ 𝗜𝗡𝗙𝗢 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 »
│❖ *ᴀᴜᴛʜᴏʀ* : ` + Config.PLK + `
│❖ *ᴋᴇʀɴᴇʟ* : ᴋᴀʟɪᴘᴘᴀɴ
│❖ *ɪɴꜱᴛᴀɢʀᴀᴍ* : ` + Config.SLINK + `
│❖ *OWNER* : https:/wa.me/918281370024...
╰────────────────❋ཻུ۪۪➹
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘
               ` + Config.BOTSK + `
    
    ⚡ ` + Config.AFN + ` ⚡
`}) 

}));
