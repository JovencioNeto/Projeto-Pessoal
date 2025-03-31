const  metrosForDAM  = require('../src/metrosForDAM')

test('A função metrosForDAM deve retornar 2.00 ao converter 20.00 metros em decâmetro', () => {
    expect(metrosForDAM(20)).toBe("A conversão de 20.00 metros para decâmetro é 2.00");
});

test('A função metrosForDAM deve retornar 3.00 ao converter 30.00 metros em decâmetro', () => {
    expect(metrosForDAM(30)).toBe("A conversão de 30.00 metros para decâmetro é 3.00");
});

test('A função metrosForDAM deve retornar 4.00 ao converter 40.00 metros em decâmetro', () => {
    expect(metrosForDAM(40)).toBe("A conversão de 40.00 metros para decâmetro é 4.00");
});
