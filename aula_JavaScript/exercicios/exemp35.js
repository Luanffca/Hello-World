// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function calculaIdade(ano){

    ano = 2021 - ano

    return ano >= 18?'Maior de idade': 'Menor de idade'
    
}

console.log(calculaIdade(2002))