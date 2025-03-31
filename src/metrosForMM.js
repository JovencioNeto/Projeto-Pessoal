function metrosForMM(metros) {
    const mm = metros * 1000
    return (`A conversão de ${metros.toFixed(2)} metros para milímetros é ${mm.toFixed(2)}`);
}

module.exports = metrosForMM
