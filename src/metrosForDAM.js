function metrosForDAM(metros) {
    const dam = metros /10 
    return (`A conversão de ${metros.toFixed(2)} metros para decâmetro é ${dam.toFixed(2)}`);
}

module.exports = metrosForDAM