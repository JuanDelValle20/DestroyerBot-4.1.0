const a = '```'

exports.wait = () => {
	return`*「 ESPERA 」 EN PROCESO*`
}

exports.succes = () => {
	return`*「 ÉXITO 」*`
}

exports.lvlon = () => {
	return`*「 ACTIVADO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESACTIVADO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*TU NIVEL AÚN ESTÁ VACÍO*`
}

exports.lvlnoon = () => {
	return`*EL NIVEL NO ESTÁ ACTIVADO TODAVÍA*`
}

exports.noregis = () => {
	return`*「 NO REGISTRADO 」*\n\n*Registrate asi, ${prefix}registro Nombre|Edad* \n*Ejemplo ${prefix}registro Destroyer|16*`
}

exports.rediregis = () => {
	return`*「 YA REGISTRADO 」*\n\n*ya estás registrado en la base de datos del bot*`
}

exports.stikga = () => {
	return`*si falló, intenta repetir de nuevo*`
}

exports.linkga = () => {
	return`*lo siento enlace inválido*`
}

exports.groupo = () => {
	return`*「SOLO EN GRUPOS」*`
}

exports.ownerb = () => {
	return`*「SOLO EL FUNDADOR DEL BOT」*`
}

exports.ownerg = () => {
	return`*「SOLO EL CREADOR DEL GRUPO」*`
}

exports.admin = () => {
	return`*「SOLO LOS ADMIN´S DEL GRUPO」*`
}

exports.badmin = () => {
	return`*「EL BOT DEBE SER ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW ACTIVO*`
}

exports.bug = () => {
	return`*Se han informado problemas al propietario del BOT, no se responderá a los informes falsos*`
}

exports.wrongf = () => {
	return`*Formato incorrecto/texto en blanco*`
}

exports.clears = () => {
	return`*Limpiar todo, Éxitoso*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\nPara saber si se ha registrado, consulte el mensaje que le envié \n\nNOTE:\n*si no ha recibido el mensaje. significa que no ha guardado el número de bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA 」*\n\nte has registrado con los datos \n\n┏━⊱nombre\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱edad\n┗⊱${umurUser}\n┏━⊱tiempo de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : no olvides este número porque es importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* Error \cintenta escribir *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*perdón pero ${pushname} no es el script del propietario*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Lo siento ${pushname} tu nivel no es suficiente*\n\n*┏⊱level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${aha}*\n\n_NOTE : CHAT / SIEMPRE PARA OBTENER EXP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Lo siento ${pushname} tu nivel no es suficiente*\n\n*┏⊱level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahb}*\n\n_NOTE : CHAT / SIEMPRE PARA OBTENER EXP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Lo siento ${pushname} tu nivel no es suficiente*\n\n*┏⊱level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahc}*\n\n_NOTE : CHAT / SIEMPRE PARA OBTENER EXP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Lo siento ${pushname} tu nivel no es suficiente*\n\n*┏⊱level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahd}*\n\n_NOTE : CHAT / SIEMPRE PARA OBTENER EXP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Lo siento ${pushname} tu nivel no es suficiente*\n\n*┏⊱level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahe}*\n\n_NOTE : CHAT / SIEMPRE PARA OBTENER EXP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Lo siento ${pushname} tu nivel no es suficiente*\n\n*┏⊱level : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nivel : ${ahf}*\n\n_NOTE : CHAT / SIEMPRE PARA OBTENER EXP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, MiDinero, role, client , process , pepolu, groupMetadata, groupAdmins, isGroup, isGroupAdmins, isLevelingOn, isWelkom, isOwner, isAntiLink, isBadWord) => { 
	if (isOwner) {
	    owner = "Owner"
	} else if (!isOwner) {
	    owner = "User"
	}
	if (isGroup){
	return `
${a}❏ ABOUT USER${a}
 ${a}│ Nombre : ${pushname}${a}
 ${a}│ Numero : wa.me/${sender.split("@")[0]}${a}
 ${a}│ owmer bot : ${owner}${a}
 ${a}│ Tu dinero : Rp${MiDinero},-${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Level : ${getLevelingLevel(sender)}${a}
 ${a}│ Rol : ${role}${a}
 ${a}╰ User register : ${_registered.length}${a}
 
 
${a}❏ABOUT BOT${a}
 ${a}│ NOMBRE : ${client.user.name}${a}
 ${a}│ browser : ${client.browserDescription[1]}${a}
 ${a}│ server : ${client.browserDescription[0]}${a}
 ${a}│ version : ${client.browserDescription[2]}${a}
 ${a}│ speed : ${process.uptime()}${a}
 ${a}│ handphone : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ ver wa : ${client.user.phone.wa_version}${a}
 
${a}❏ABOUT GROUP${a}
 ${a}│ Name group : ${groupMetadata.subject}${a}
 ${a}│ admin group : ${isGroupAdmins}${a}
 ${a}│ owner group : wa.me/${groupMetadata.owner.split("@")}${a}
 ${a}│ total member : ${groupMetadata.participants.length}${a}
 ${a}│ total admin : ${groupAdmins.length}${a}
 ${a}│ welcome : ${isWelkom}${a}
 ${a}│ antibadword : ${isBadWord}${a}
 ${a}│ leveling : ${isLevelingOn}${a}
 ${a}╰ antilink : ${isAntiLink}${a}
 
 ${a}「uso total del comando」${a}
 *${pepolu}used*
 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*
${a}❏MAKER MENU${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}text3d${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏FUN MENU${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}emoji${a}
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
`
} else if (!isGroup) {
    return `
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
`
}
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 FELICIDADES!!! 」*
┏⊱ *Nombre* : ${pushname}
┣⊱ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limit* : +3
┣⊱ *Rol*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Lo siento ${pushname} El límite de hoy se acabó*\n*comprar límite para obtener límite / subir de nivel*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
el resto de tu límite : ${limitCounts}
NOTE : para llegar al límite. puede pasar de nivel o límite de compra`
}

exports.satukos = () => {
	return`*Agregar parámetros 1/enable o 0/disable`
}

exports.MiDinero = (pushname, sender, MiDinero) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nombre* : ${pushname}\n┣⊱ *Numero* : ${sender.split("@")[0]}\n┣⊱ *Dinero* : ${MiDinero}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `La función AFK funciona *activado*!\n\n➸ *Username*: ${pushname}\n➸ *Razón*: ${reason}`
}

exports.afkOnAlready = () => {
    return `La función AFK se activó de antemano.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! La persona está AFK, no te molestes!\n➸ *Razon: ${getReason}\n➸ *Desde*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* ha vuelto de AFK! Bienvenido de nuevo~`
}

exports.left = (num) => {
	return`Se ha ido un/a Destructor/a @${num.split('@')[0]} ojalá vuelvas pronto.`
}

exports.welcome = ( mdata , num ) => {
	return`Bienvenid@ @${num.split('@')[0]}\ al grupo *${mdata.subject}* ahora eres un/a Destructor/a`
}