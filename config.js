const fs = require('fs')
const chalk = require('chalk')
const  { ind, eng} = require(`./language`)
lang = global.lang


// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	lolhuman :'https://api.lolhuman.xyz',
	cali : 'https://caliphapi.com',
	vse : 'https://api-vyvse.herokuapp.com'
}
// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
	'https://api.lolhuman.xyz': '3211199ba2ebb6121d3676b8', //4e5dd596c8
	'https://caliphapi.com': 'MqrYHqvR',
	'https://api-vyvse.herokuapp.com' : 'hsfsq2at82tBKJFW4Est'
}
// sistem
global.modepub = true //true for public | false for self
global.lang = eng //ind for indonesia | eng for english
global.limitMember = 50 //minimum member
// profile
global.owner = ['6289508996342','62895327205097'] // owner
global.vvip =[]
global.packname = 'KM' //pacname sticker & name bot
global.author = 'KNETBOT' //author sticker
global.ownername = 'MINGYU' //your name
global.fouter = 'MINGYU ©2022' //whatever
global.ownernumber = '6289508996342' //owner number
// media
global.thumbnaili = './media/RKS.jpg' //thumbnail
global.donasnya ='./media/RKS.jpg' //donate image
global.video = '.media/VIDEOWIBU.mp4' //video to link? switch to {url: 'yourlinkvideo' }
global.youtube = 'https://youtube.com/c/' //youtube
global.webyou = 'https://github.com/RIKASHIKI' //github
global.email = 'dammingyu@gmail.com' //email
global.loc = 'KOREA' //location
global.instagram = 'https://instagram.com/dammingyu' //ig
global.grup = ' https://chat.whatsapp.com/Ju3adWhlqx9I5Vc0dJAs9o' //grup whatsapp
global.sessionName = 'session' //session
global.prefa = ['','!','.','🐦','🐤','🗿'] 
global.sp = '□' //mark


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
