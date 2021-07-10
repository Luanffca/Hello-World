// Utilizando os conceitos que estudamos, vamos criar um programa que irá nos informar os dias de aula para a nossa turma.

const dia = 'domingo';

function aula(dia){
    if(dia == 'segunda' || dia == 'terça' || dia == 'quarta' || dia == 'quinta' || dia == 'sexta'){
        return 'Haverá aula.'
    }
    else if(dia == 'sabado' || dia == 'domingo' || dia == 'sábado'){
        return 'Não haverá aula.'
    }
    else{
        return 'Valor inválido.'
    }
}
console.log(aula(dia));
