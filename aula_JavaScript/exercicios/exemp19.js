//Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.

function cotacaodola(reais){
    let dolar = 5.26

    reais /= dolar

    console.log(reais)
}

console.log(cotacaodola(1000))