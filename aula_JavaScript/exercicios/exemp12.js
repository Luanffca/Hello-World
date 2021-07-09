// Crie uma função que determina se um número é par ou impar.

function parimpar(valor){
    if(valor % 2 === 0){
        return "Par"
    }
    else{
        return "Impar"
    }
}

console.log(parimpar(10))