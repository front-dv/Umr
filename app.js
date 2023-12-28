const ism = prompt("Ismingizni kiriting:")
const yosh = +prompt('Yoshingizni kiriting:')

let tugilganYil = 2023 - yosh
let oy = yosh * 12
let hafta = ((yosh * 365) / 7).toFixed(0)
let kun = yosh * 365
let soat = kun * 24
let daqiqa = soat * 60
let soniya = daqiqa * 60

const result = `Qadirli ${ism}. Siz ${tugilganYil} yilda tug'ilgansiz. Va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} daqiqa, ${daqiqa} soniya yashagansiz 😉`
alert(result)