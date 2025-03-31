const  metrosForCM  = require('../src/metrosForCM')

test('A função metrosForCM deve retornar 2.00 ao converter 200.00 metros em centímetros', () => {
    expect(metrosForCM(2)).toBe("A conversão de 2.00 metros para centímetros é 200.00");
});

test('A função metrosForCM deve retornar 3.00 ao converter 300.00 metros em centímetros', () => {
    expect(metrosForCM(3)).toBe("A conversão de 3.00 metros para centímetros é 300.00");
});

test('A função metrosForCM deve retornar 4.00 ao converter 400.00 metros em centímetros', () => {
    expect(metrosForCM(4)).toBe("A conversão de 4.00 metros para centímetros é 400.00");
});
