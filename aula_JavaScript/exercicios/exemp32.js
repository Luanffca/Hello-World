// Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function maior(valor1, valor2){
    if(valor1 > valor2){
        console.log('O maior valor é:', valor1)
    }
    else if(valor1 === valor2){
        console.log('Os números são iguais')
    }
    else{
        console.log('O maior valor é:', valor2)
    }
}

console.log(maior(5,4))