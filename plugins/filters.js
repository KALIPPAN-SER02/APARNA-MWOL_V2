/* Copyright (C) 2021 ameer-kallumthodi   &   Turbo.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false }, (async (message, match) => {
    if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918281370025@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/Turbo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Aliya','Aliyo','Anno','Ano','Arulle','Ayin','Baa','Baby','Bgm','Block','BombBot','Boys','Breakup','By','Chunk','Daa','Fan','Feel','Free fire','Girl','Good night','Good morning','Ha','Hai','Happy','Hii','Hi','Hlo','Hum','I love you','Intro','Kalippan','Kgf','Kalippanser','Kili','Kiss','Kozhi','Kundan','Line undo','Loo','Love vendada','Love','Lubu','Mamma','Midhun','Mine','Mm','Mood of','Myr','Myre','Name','Nanban','Nanbans','Nee','Njan nannayi','Njan seen ane','Ok','On','Onam','Ozhivaki','Poda','Podi','Poli','Power','Romantic','SedSet','Sir','Smile','Sorry','Thayoli','Va','Vaa','Vadaa','Vannu','Venda','X','alive','ambada','audio','avastha','aysheri','bea','bro','chat','com','fans','hello','indo','help','oho','pavam','phaa','pm','rashu','setvar','single','start','sticker','tata','try','umma','uyir','vellachil','welcome','xmedia','you','Aparna']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted: message.data, ptt: true})
}
});
    }
    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '919995801023@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/jifi.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == '918281370024@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/Turbo.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }           
const array = ['Aliya','Aliyo','Anno','Ano','Arulle','Ayin','Baa','Baby','Bgm','Block','BombBot','Boys','Breakup','By','Chunk','Daa','Fan','Feel','Free fire','Girl','Good night','Good morning','Ha','Hai','Happy','Hii','Hi','Hlo','Hum','I love you','Intro','Kalippan','Kgf','Kalippanser','Kili','Kiss','Kozhi','Kundan','Line undo','Loo','Love vendada','Love','Lubu','Mamma','Midhun','Mine','Mm','Mood of','Myr','Myre','Name','Nanban','Nanbans','Nee','Njan nannayi','Njan seen ane','Ok','On','Onam','Ozhivaki','Poda','Podi','Poli','Power','Romantic','SedSet','Sir','Smile','Sorry','Thayoli','Va','Vaa','Vadaa','Vannu','Venda','X','alive','ambada','audio','avastha','aysheri','bea','bro','chat','com','fans','hello','indo','help','oho','pavam','phaa','pm','rashu','setvar','single','start','sticker','tata','try','umma','uyir','vellachil','welcome','xmedia','you','Aparna']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, duration: Config.SAID, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.AUTOSTICKER){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '916380260672@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/Turbo.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Kalippanser','help'']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./sticker/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
}
