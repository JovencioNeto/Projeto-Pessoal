const metrosForCM = require('../src/metrosForCM')

describe('Conversão de metros para centímetros', () => {
    test('Deve retornar 200.00 ao converter 2.00 metros', () => {
        expect(metrosForCM(2)).toBe("A conversão de 2.00 metros para centímetros é 200.00")
    })

    test('Deve retornar 300.00 ao converter 3.00 metros', () => {
        expect(metrosForCM(3)).toBe("A conversão de 3.00 metros para centímetros é 300.00")
    })

    test('Deve retornar 400.00 ao converter 4.00 metros', () => {
        expect(metrosForCM(4)).toBe("A conversão de 4.00 metros para centímetros é 400.00")
    })

    test('Deve retornar "Entrada inválida. Por favor, informe um número" ao colocar a string "abc" ', () => {
        expect(metrosForCM('abc')).toBe("Entrada inválida. Por favor, informe um número")
    })
})
