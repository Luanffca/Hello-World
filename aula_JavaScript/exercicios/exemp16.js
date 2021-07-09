// Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6

function factorial(valor){
    let fatorail = valor
    for(let i = 1; i < valor; i++){
        fatorail *= i 
        console.log(fatorail)
    }
}

console.log(factorial(6))