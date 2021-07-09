// Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

function semaforo(word){
    if(word == 'verde'){
        return 'Siga'
    }
    if(word == 'amarelo'){
        return 'deruza'
    }
    if(word == 'vermelho'){
        return 'pare'
    }
}
const sinal = semaforo('vermelho')

console.log(sinal)