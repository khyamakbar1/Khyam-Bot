
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ◦* *ᴡᴇʟᴄᴏᴍᴇ ɪᴛs sɪʟᴇɴᴛ-sᴏʙx-ᴍᴅ-ʙᴏᴛ*
*│  ◦* *ᴄʀᴇᴀᴛᴇʀ sɪʟᴇɴᴛ-ʟᴏᴠᴇʀ...⁴³²*
*│  ◦* *ʀᴇᴀɪʟ ɴᴀᴍᴇ➠ ᴜsᴍᴀɴ.s*
*│  ◦* *ᴘᴜʙʟɪᴄ ɴᴀᴍᴇ➠ sɪʟᴇɴᴛ ʟᴏᴠᴇʀ*
*│  ◦* *ᴀɢᴇ➠ ᴛᴡᴇɴᴛʏ ᴏɴᴇ ʏᴇᴀʀ*
*│  ◦* *ᴄɪᴛʏ➠ ᴘᴇʀsɴᴏʟ ʜᴀɪ*
*│  ◦* *ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ᴅᴇᴠᴇʟᴘᴏʀ*
*╰┈───────────────•*
> *◆◆◆◆◆◆◆◆◆◆◆◆*

*[ • SILENT-SOBX-MD - TEAM • ]*
*╭┈───────────────•*
*│  ◦* *▢➠sɪʟᴇɴᴛ ʟᴏᴠᴇʀ⁴³²*
*│  ◦* *▢➠sɪʟᴇɴᴛ ᴋɪʟʟᴇʀ⁴⁶⁹*
*│  ◦* *▢➠ᴅᴀʀᴋ ᴅᴇᴠɪʟ⁷¹⁹*
*│  ◦* *▢➠sᴏʙɪᴀ ʙᴜᴛᴛ*
*│  ◦* *▢➠ɴᴏᴛʜɪɴɢ*
*╰┈───────────────•*
*•────────────•⟢*
> © KHYAM BOT
*•────────────•⟢*
`

await conn.sendMessage(
    from,
    { 
      image: { url: 'https://i.imghippo.com/files/SY9872yWM.png' },
      caption: about // 
    },
    { quoted: mek } // 
  );
  

}catch(e){
console.log(e)
reply(`${e}`)
}
})
