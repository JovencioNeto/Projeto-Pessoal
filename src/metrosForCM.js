function metrosForCM(metros) {
    if (typeof metros !== "number") {
        return("Entrada inválida. Por favor, informe um número")
    }else{
        const cm = metros * 100
        return( `A conversão de ${metros.toFixed(2)} metros para centímetros é ${cm.toFixed(2)}`)
    }
}

module.exports = metrosForCM
