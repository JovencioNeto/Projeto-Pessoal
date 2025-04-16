function metrosForMM(metros) {
    if (typeof metros !== "number") {
        return("Entrada inválida. Por favor, informe um número")
    }else{
        const mm = metros * 1000
        return (`A conversão de ${metros.toFixed(2)} metros para milímetros é ${mm.toFixed(2)}`)
    }
}

module.exports = metrosForMM
