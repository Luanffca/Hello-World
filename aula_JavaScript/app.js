// pega um input
const livros = require('./aadatabase')
const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N ')

// Se for sim, mostra as categorias disponiveis, pergunta qual categoria ela escolhe

if (entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponiveis: ')
    console.log("Fantasia")

    const entredaCategoria = readline.question("Qual categoria você escolhe: ")

    const retorno = livros.filter(livro => livro.categoria === entredaCategoria)

    console.table(retorno)
}
// Se não, mostra todos os livros em ordem crescente pela quatidade de paginas
else{
    const livrosOrdelados = livros.sort((a,b) =>a.paginas - b.paginas)
    console.log('Esses são todos os livros disponiveis:')
    console.table(livrosOrdelados)
}