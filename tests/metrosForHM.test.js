const metrosForHM = require('../src/metrosForHM')

describe('Conversão de metros para hectômetro', () => {
    test('Deve retornar 0.2 ao converter 20.00 metros', () => {
        expect(metrosForHM(20)).toBe("A conversão de 20.00 metros para hectômetro é 0.20")
    })

    test('Deve retornar 3.00 ao converter 30.00 metros', () => {
        expect(metrosForHM(30)).toBe("A conversão de 30.00 metros para hectômetro é 0.30")
    })

    test('Deve retornar 4.00 ao converter 40.00 metros', () => {
        expect(metrosForHM(40)).toBe("A conversão de 40.00 metros para hectômetro é 0.40")
    })

    test('Deve retornar "Entrada inválida. Por favor, informe um número" ao colocar a string "everson" ', () => {
        expect(metrosForHM('everson')).toBe("Entrada inválida. Por favor, informe um número")
    })
})
