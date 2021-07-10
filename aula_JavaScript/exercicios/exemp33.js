// Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function imparoupar(valor){
    if(valor % 2 === 0){
        return 'par'
    }
    else{
        return 'impar'
    }
}

const ip = imparoupar(9)

console.log(ip)
