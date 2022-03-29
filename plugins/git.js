const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://www.linkpicture.com/q/20211209_231606_1.png", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*APARNA MWOL V2 bot created by KALIPPANSER*
*Creator number : wa.me/918281370025?text=Hi%20Kalippan%20ser.%20*

*Githublink :    https://github.com/KALIPPAN-SER02/APARNA-MWOL_V2*

*Audio commads :   https://github.com/KALIPPAN-SER02/APARNA-MWOL_V2/tree/master/uploads*

*My channel link : https://youtube.com/channel/UC0yNrBziB3u2hzvXzJ4NnTA* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
