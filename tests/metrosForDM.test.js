const metrosForDM = require('../src/metrosForDM')

describe('Conversão de metros para decímetro', () => {
    test('Deve retornar 20.00 ao converter 2.00 metros', () => {
        expect(metrosForDM(2)).toBe("A conversão de 2.00 metros para decímetro é 20.00")
    })

    test('Deve retornar 30.00 ao converter 3.00 metros', () => {
        expect(metrosForDM(3)).toBe("A conversão de 3.00 metros para decímetro é 30.00")
    })

    test('Deve retornar 40.00 ao converter 4.00 metros', () => {
        expect(metrosForDM(4)).toBe("A conversão de 4.00 metros para decímetro é 40.00")
    })

    test('Deve retornar "Entrada inválida. Por favor, informe um número" ao colocar a string "cba" ', () => {
        expect(metrosForDM('cba')).toBe("Entrada inválida. Por favor, informe um número")
    })
})
