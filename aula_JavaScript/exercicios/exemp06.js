// Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?

function desconto(valor){
    let valorde
    valorde = valor * (25/100) 
    valor -= valorde

    console.log(valor)
}

console.log(desconto(3000))


