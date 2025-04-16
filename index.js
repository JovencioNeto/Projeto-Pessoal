const metrosForCM = require('./src/metrosForCM')
const metrosForDAM = require('./src/metrosForDAM')
const metrosForDM = require('./src/metrosForDM')
const metrosForKM = require('./src/metrosForKM')
const metrosForMM = require('./src/metrosForMM')
const metrosForHM = require('./src/metrosForHM')

console.log(metrosForCM(200))
console.log(metrosForDM(200))
console.log(metrosForDAM(890))
console.log(metrosForKM(30))
console.log(metrosForMM(57))
console.log(metrosForHM(1000))


console.log(metrosForCM('beta'))
console.log(metrosForHM('samuel'))
console.log(metrosForKM('saruel'))