// Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.
//Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function seila(valor1, valor2){

    let resp
    resp = valor1 / valor2

    console.log(resp)
    if( valor1 % valor2 === 0){
        console.log('PAR')
    }

}

console.log(seila(8,2))
