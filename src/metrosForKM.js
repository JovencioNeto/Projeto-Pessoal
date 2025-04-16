function metrosForKM(metros) {
    if (typeof metros !== "number") {
        return("Entrada inválida. Por favor, informe um número")
    }else{
        const km = metros/1000
        return (`A conversão de ${metros.toFixed(2)} metros para kilometros é ${km.toFixed(2)}`)
    }
}

module.exports = metrosForKM
