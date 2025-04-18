const readline = require('readline')

const metrosForCM = require('./src/metrosForCM')
const metrosForDAM = require('./src/metrosForDAM')
const metrosForDM = require('./src/metrosForDM')
const metrosForKM = require('./src/metrosForKM')
const metrosForMM = require('./src/metrosForMM')
const metrosForHM = require('./src/metrosForHM')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('Digite o valor em metros: ', (valor) => {
  const metros = Number(valor)

  if (isNaN(metros)) {
    console.log('Erro: o valor digitado não é um número.')
    rl.close()
    return
  }

  console.log('\nEscolha a unidade para conversão:')
  console.log('1 - Centímetros (cm)')
  console.log('2 - Decímetros (dm)')
  console.log('3 - Decâmetros (dam)')
  console.log('4 - Quilômetros (km)')
  console.log('5 - Milímetros (mm)')
  console.log('6 - Hectômetros (hm)\n')

  rl.question('Digite o número da opção: ', (opcao) => {
    let resultado

    switch (opcao) {
      case '1':
        resultado = metrosForCM(metros)
        console.log(`${metros} metros = ${resultado} centímetros`)
        break
      case '2':
        resultado = metrosForDM(metros)
        console.log(`${metros} metros = ${resultado} decímetros`)
        break
      case '3':
        resultado = metrosForDAM(metros)
        console.log(`${metros} metros = ${resultado} decâmetros`)
        break
      case '4':
        resultado = metrosForKM(metros)
        console.log(`${metros} metros = ${resultado} quilômetros`)
        break
      case '5':
        resultado = metrosForMM(metros)
        console.log(`${metros} metros = ${resultado} milímetros`)
        break
      case '6':
        resultado = metrosForHM(metros)
        console.log(`${metros} metros = ${resultado} hectômetros`)
        break
      default:
        console.log('Opção inválida.')
    }

    rl.close()
  })
})
