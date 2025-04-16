const metrosForDAM = require('../src/metrosForDAM')

describe('Conversão de metros para decâmetro', () => {
    test('Deve retornar 2.00 ao converter 20.00 metros', () => {
        expect(metrosForDAM(20)).toBe("A conversão de 20.00 metros para decâmetro é 2.00")
    })

    test('Deve retornar 3.00 ao converter 30.00 metros', () => {
        expect(metrosForDAM(30)).toBe("A conversão de 30.00 metros para decâmetro é 3.00")
    })

    test('Deve retornar 4.00 ao converter 40.00 metros', () => {
        expect(metrosForDAM(40)).toBe("A conversão de 40.00 metros para decâmetro é 4.00")
    })

    test('Deve retornar "Entrada inválida. Por favor, informe um número" ao colocar a string "bcd" ', () => {
        expect(metrosForDAM('bcd')).toBe("Entrada inválida. Por favor, informe um número")
    })
})
