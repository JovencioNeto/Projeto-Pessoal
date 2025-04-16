const metrosForKM = require('../src/metrosForKM')

describe('Conversão de metros para quilômetros', () => {
    test('Deve retornar 2.00 ao converter 2000.00 metros', () => {
        expect(metrosForKM(2000)).toBe("A conversão de 2000.00 metros para kilometros é 2.00")
    })

    test('Deve retornar 3.00 ao converter 3000.00 metros', () => {
        expect(metrosForKM(3000)).toBe("A conversão de 3000.00 metros para kilometros é 3.00")
    })

    test('Deve retornar 4.00 ao converter 4000.00 metros', () => {
        expect(metrosForKM(4000)).toBe("A conversão de 4000.00 metros para kilometros é 4.00")
    })

    test('Deve retornar "Entrada inválida. Por favor, informe um número" ao colocar a string "sigma" ', () => {
        expect(metrosForKM('sigma')).toBe("Entrada inválida. Por favor, informe um número")
    })
})
