function metrosForDM(metros) {
    const dm = metros * 10
    return (`A conversão de ${metros.toFixed(2)} metros para decímetro é ${dm.toFixed(2)}`);
}

module.exports = metrosForDM