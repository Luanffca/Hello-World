// Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function semana(dia){
    if(dia === 1){
        return 'Segunda-Feira'
    }
    else if(dia === 2){
        return 'Terça-Feira'
    }
    else if(dia === 3){
        return 'Quarta-Feira'
    }
    else if(dia === 4){
        return 'Quinta-Feira'
    }
    else if(dia === 5){
        return 'Sexta-Feira'
    }
    else if(dia === 6){
        return 'Sábado'
    }
    else if(dia === 7){
        return 'Domingo'
    }
}

const sema = semana(7) 

console.log(sema)
