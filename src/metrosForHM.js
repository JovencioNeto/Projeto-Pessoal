function metrosForDM(metros) {
    if (typeof metros !== "number") {
        return("Entrada inválida. Por favor, informe um número")
    }else{
        const hm = metros/100
        return (`A conversão de ${metros.toFixed(2)} metros para hectômetro é ${hm.toFixed(2)}`)
    }
}

module.exports = metrosForDM