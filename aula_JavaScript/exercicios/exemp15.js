//Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function celforfah(celsius){

    let fahrenheit

    fahrenheit = (celsius * (9/5)) + 32

    console.log(fahrenheit)
}

console.log(celforfah(15))