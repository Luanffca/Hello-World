const pessoa = {
    nome: "Luan",
    idade: 19,
    cidade: "Aracati"
}

// Notação de Ponto
console.log(pessoa.nome)

// Notação de Chaves
console.log(pessoa['idade'])

// Notação Destructuring -> Como Desestruturar Obejetos
const  {nome, idade, cidade } = pessoa

console.log(nome)
console.log(idade)
console.log(cidade)