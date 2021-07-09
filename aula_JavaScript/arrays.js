const alunoGame=["Paula", "Maria", "Estela", "Cruella"]

//Acessar informações no Array
//console.log(alunoGame[3])

//Operador Spread (...)

const alunoXp = [...alunoGame, "Lucia"]

//console.log(alunoXp)

// Métodos de iteração

// for (let i = 0; i <alunoXp.length; i++){
//     console.log(alunoXp[i])
// }

// Método MAP
//alunoXp.map(aluna => console.log(aluna))

// Método FILTER

const numeros = [19, 17, 18, 90, 3]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)
//console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero % 2 == 0)
//console.log(numerosPares)

// Método SORT
const numeosOrdenadosCrescente = numeros.sort()
//console.log(numeosOrdenadosCrescente)

const numeosOrdenadosDecrescente = numeros.sort((a,b) => b - a)
//console.log(numeosOrdenadosDecrescente)

// Método REDUCE -> reduz nosso array a um resultado de uma operação matemática

const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior, valorAtual) =>{
    return valorAnterior + valorAtual
}, 5)

console.log(soma)