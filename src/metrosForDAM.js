function metrosForDAM(metros) {
    if (typeof metros !== "number") {
        return("Entrada inválida. Por favor, informe um número")
    }else{
        const dam = metros /10 
        return (`A conversão de ${metros.toFixed(2)} metros para decâmetro é ${dam.toFixed(2)}`)
    }
}

module.exports = metrosForDAM