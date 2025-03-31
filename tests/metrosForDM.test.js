const metrosForDM  = require('../src/metrosForDM')

test('A função metrosForDM deve retornar 20.00 ao converter 2.00 metros em decímetro', () => {
    expect(metrosForDM(2)).toBe("A conversão de 2.00 metros para decímetro é 20.00");
});

test('A função metrosForDM deve retornar 30.00 ao converter 3.00 metros em decímetro', () => {
    expect(metrosForDM(3)).toBe("A conversão de 3.00 metros para decímetro é 30.00");
});

test('A função metrosForDM deve retornar 40.00 ao converter 4.00 metros em decímetro', () => {
    expect(metrosForDM(4)).toBe("A conversão de 4.00 metros para decímetro é 40.00");
});
