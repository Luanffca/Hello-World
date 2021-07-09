const filmes = [
    {
        id: 1,
        titulo: "Jogos Vorazes",
        descricao: "Ação, Ficção Científica",
        duracao: 120
    },
    {
        id: 2,
        titulo: "Senhor dos Anéis - A sociedade do Anel",
        descricao: "Ação, Ficção Científica, Fantasia",
        duracao: 240
    },
    {
        id: 3,
        titulo: "Harry Potter e a Pedra filosofal",
        descricao: "Ação, Ficção Científica, Fantasia",
        duracao: 259
    }
]

const {id, titulo, descricao, duracao} = filmes
//Retorna cada descrição
filmes.map(filmes => console.log(filmes.descricao))