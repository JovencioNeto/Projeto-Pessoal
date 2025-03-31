const  metrosForMM  = require('../src/metrosForMM')

test('A função metrosForMM deve retornar 2000.00 ao converter 2.00 metros em milímetro', () => {
    expect(metrosForMM(2)).toBe("A conversão de 2.00 metros para milímetros é 2000.00");
});

test('A função metrosForMM deve retornar 3000.00 ao converter 3.00 metros em milímetro', () => {
    expect(metrosForMM(3)).toBe("A conversão de 3.00 metros para milímetros é 3000.00");
});

test('A função metrosForMM deve retornar 4000.00 ao converter 4.00 metros em milímetro', () => {
    expect(metrosForMM(4)).toBe("A conversão de 4.00 metros para milímetros é 4000.00");
});
