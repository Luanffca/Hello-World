// Faça um programa que dado um número, imprime no console.log a tabuada do mesmo de 1 a 10.

function tabuada(valor){
    let resp = 0
    for(let i = 1; i <= 10; i++){
        resp = valor * i
        console.log(resp)
    }
}

console.log(tabuada(2))
