const  metrosForKM  = require('../src/metrosForKM')

test('A função metrosForKM deve retornar 2.00 ao converter 2000.00 metros em kilomêtros', () => {
    expect(metrosForKM(2000)).toBe("A conversão de 2000.00 metros para kilometros é 2.00");
});

test('A função metrosForKM deve retornar 3.00 ao converter 3000.00 metros em kilomêtros', () => {
    expect(metrosForKM(3000)).toBe("A conversão de 3000.00 metros para kilometros é 3.00");
});

test('A função metrosForKM deve retornar 4.00 ao converter 4000.00 metros em kilomêtros', () => {
    expect(metrosForKM(4000)).toBe("A conversão de 4000.00 metros para kilometros é 4.00");
});
