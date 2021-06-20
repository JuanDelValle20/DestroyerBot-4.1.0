const help = (prefix) => {
	return `

⌜ *DestroyerBot-4.1.0 🤖 by JuandelValle* ⌟  

◉ *INFORMACION*
   ○ Comando: ⌜ ${prefix} ⌟
   ○ Creador: JuandelValle™ 

   ${a}❏ ABOUT USER${a}
   ${a}│ Nombre : ${pushname}${a}
   ${a}│ Numero : wa.me/${sender.split("@")[0]}${a}
   ${a}│ Dinero : Rp${MiDinero},-${a}
   ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
   ${a}│ Level : ${getLevelingLevel(sender)}${a}
   ${a}│ Rol : ${role}${a}
   ${a}╰ User register : ${_registered.length}${a}
   
  ${a}❏ABOUT BOT${a}
   ${a}│ • NOMBRE : ${client.user.name}${a}
   ${a}│ • browser : ${client.browserDescription[1]}${a}
   ${a}│ • server : ${client.browserDescription[0]}${a}
   ${a}│ • version : ${client.browserDescription[2]}${a}
   ${a}│ • speed : ${process.uptime()}${a}
   ${a}│ • handphone : ${client.user.phone.device_manufacturer}${a}
   ${a}╰ • ver wa : ${client.user.phone.wa_version}${a}
   
   ${a}「uso total del comando」${a}
   *${pepolu} used*
   *${prefix}info*
   *${prefix}owner*
  ${a}❏MAKER MENU${a}
   ${a}│•${prefix}sticker${a}
   ${a}│•${prefix}quotemaker${a}
   ${a}│•${prefix}qrcode${a}
   ${a}│•${prefix}nulis${a}
   ${a}│•${prefix}text3d${a}
   ${a}╰•${prefix}ttp${a}
   
  ${a}❏FUN MENU${a}
   ${a}│•${prefix}lirik${a}
   ${a}│•${prefix}rate${a}
   ${a}│•${prefix}textlight${a}
   ${a}│•${prefix}glitchtext${a}
   ${a}│•${prefix}slap${a}
   ${a}│•${prefix}emoji${a}
   ${a}│•${prefix}animequotes${a}
   ${a}│•${prefix}neonime${a}
   ${a}│•${prefix}apkpure${a}
   ${a}╰•${prefix}happymod${a} 
   
  ${a}❏MEDIA MENU${a}
   ${a}│•${prefix}pinterest${a}
   ${a}╰•${prefix}ssweb${a}
   
  ${a}❏SONG${a}
   ${a}│•${prefix}ytmp3${a}
   ${a}│•${prefix}ytmp4${a}
   ${a}╰•${prefix}joox${a}
   
  ${a}❏NSFW${a}
   ${a}│•${prefix}anjing${a}
   ${a}│•${prefix}blowjob${a}
   ${a}│•${prefix}nekonime${a}
   ${a}│•${prefix}pokemon${a}
   ${a}│•${prefix}husbu${a}
   ${a}│•${prefix}nangis${a}
   ${a}│•${prefix}cium${a}
   ${a}│•${prefix}peluk${a}
   ${a}╰•${prefix}ranime${a}
   
  ${a}❏LIMITE Y DINERO${a}
   ${a}│•${prefix}limit${a}
   ${a}│•${prefix}buylimit${a}
   ${a}│•${prefix}transfer${a}
   ${a}│•${prefix}dompet${a}
   ${a}│•${prefix}giftlimit${a}
   ${a}╰•${prefix}leaderboard${a}
   
  ${a}❏GROUP MENU${a}
   ${a}│•${prefix}delete${a}
   ${a}│•${prefix}hidetag${a}
   ${a}│•${prefix}blocklist${a}
   ${a}│•${prefix}grouplist${a}
   ${a}│•${prefix}level${a}
   ${a}│•${prefix}linkgc${a}
   ${a}│•${prefix}tagall${a}
   ${a}│•${prefix}setpp${a}
   ${a}│•${prefix}add${a}
   ${a}│•${prefix}kick${a}
   ${a}│•${prefix}setname${a}
   ${a}│•${prefix}setdesc${a}
   ${a}│•${prefix}demote${a}
   ${a}│•${prefix}promote${a}
   ${a}│•${prefix}listadmin${a}
   ${a}│•${prefix}group [abierto/cerrado]${a}
   ${a}│•${prefix}leveling [enable/disable]${a}
   ${a}│•${prefix}nsfw [1/0]${a}
   ${a}│•${prefix}simih [1/0]${a}
   ${a}│•${prefix}welcome [1/0]${a}
   ${a}│•${prefix}antilink [1/0]${a}
   ${a}│•${prefix}join${a}
   ${a}╰•${prefix}nobadword [enable/disable]${a}
   
  ${a}❏HERRAMIENTAS${a}
   ${a}│•${prefix}tomp3${a}
   
  ${a}❏ALMACENAMIENTO EN LA NUBE${a}
   ${a}│•${prefix}addsticker${a}
   ${a}│•${prefix}getsticker${a}
   ${a}│•${prefix}stickerlist${a}
   ${a}│•${prefix}addvideo${a}
   ${a}│•${prefix}getvideo${a}
   ${a}│•${prefix}videolist${a}
   ${a}│•${prefix}getimage${a}
   ${a}│•${prefix}addImage${a}
   ${a}│•${prefix}imagelist${a}
   ${a}│•${prefix}addvn${a}
   ${a}│•${prefix}getvn${a}
   ${a}╰•${prefix}vnlist${a}
   
  ${a}❏OWNER MENU${a}
   ${a}│•${prefix}bc${a}
   ${a}│•${prefix}addbadword${a}
   ${a}│•${prefix}delbadword${a}
   ${a}│•${prefix}bcgc${a}
   ${a}│•${prefix}kickall${a}
   ${a}│•${prefix}setreply${a}
   ${a}│•${prefix}setprefix${a}
   ${a}│•${prefix}clearall${a}
   ${a}│•${prefix}block${a}
   ${a}│•${prefix}unblock${a}
   ${a}│•${prefix}leave${a}
   ${a}│•${prefix}event [1/0]${a}
   ${a}│•${prefix}clone${a}
   ${a}╰•${prefix}setppbot${a}
   ${a}❏GRACIAS A${a}
   ${a}│${a}
   ${a}│ • JUAN <editor>${a}
   ${a}│ • Destroyer-Bot 4.1.0 <nombre del bot>${a}
   ${a}│ • Pokémon Go <público dirigido>${a}
   ${a}│${a}
   ${a}╰ • NOTA : PROYECTO Destroyer-Bot 4.1.0${a}

   *COMANDOS EXTRA*
◉ *NUEVOS MENUS*
- ${prefix}desmenu
Descargar musica y videos de YT
- ${prefix}welmenu
Comandos de bienvedia a grupos

◉ *PARA USAR EL BOT*
Registrate con el comando ${prefix}registro y tu nombre

◉ *RESUELVE TUS DUDAS*
  ║
  ╠ ○ ${prefix}creador
  ╚ Dudas o problemas aqui

◉ *CREAR STICKERS*
  ║
  ╠ ○ ${prefix}sticker
  ╠ ○ ${prefix}attp
  ╠ Mas un texto corto
  ╠ ○ ${prefix}stickergif
  ╚ 6 segundos de video

◉ *CONVERTIDORES*
  ║
  ╠ ○ ${prefix}toimg
  ╠ De sticker a JPG
  ╠ ○ ${prefix}tomp3
  ╚ De video a MP3

◉ *AUDIO*
  ║
  ╠ ○ ${prefix}idioma
  ╚ ○ ${prefix}tts es (mas texto)

◉ *OTROS*
  ║
  ╠ ○ ${prefix}wame
  ╠ Link de Whatsapp
  ╠ ○ ${prefix}qrcode
  ╚ Coloca un texto

◉ *GRUPOS*
  ║
  ╠ ○ ${prefix}closegc
  ╠ Cerrar el grupo solo admins
  ╠ ○ ${prefix}opengc
  ╠ Abrir grupo solo admins
  ╠ ○ ${prefix}kick o pafuera
  ╠ Eliminar a un miembro 
  ╠ ○ ${prefix}promote
  ╠ Dar admin a un miembro
  ╠ ○ ${prefix}demote
  ╠ Quitar el admin
  ╠ ○ ${prefix}linkgc
  ╠ Link del grupo
  ╠ ○ ${prefix}todos
  ╚ Nombra a todos los del grupo

Para usar estas funciones el bot necesita admin
  

by JuandelValle

`
}

exports.help = help
