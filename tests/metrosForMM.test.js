const metrosForMM = require('../src/metrosForMM')

describe('Conversão de metros para milímetros', () => {
    test('Deve retornar 2000.00 ao converter 2.00 metros', () => {
        expect(metrosForMM(2)).toBe("A conversão de 2.00 metros para milímetros é 2000.00")
    })

    test('Deve retornar 3000.00 ao converter 3.00 metros', () => {
        expect(metrosForMM(3)).toBe("A conversão de 3.00 metros para milímetros é 3000.00")
    })

    test('Deve retornar 4000.00 ao converter 4.00 metros', () => {
        expect(metrosForMM(4)).toBe("A conversão de 4.00 metros para milímetros é 4000.00")
    })

    test('Deve retornar "Entrada inválida. Por favor, informe um número" ao colocar a string "123" ', () => {
        expect(metrosForMM('123')).toBe("Entrada inválida. Por favor, informe um número")
    })
})
