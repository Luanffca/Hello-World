//Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function rimc(massa, altura){
    let imc = 0
    imc = massa / (altura * altura)
    if(imc < 20){
        return 'Você esta abaixo do peso!'
    } 
    else if(imc >20 && imc <= 25){
    	return "Peso Ideal"
    }
    else if(imc >25 && imc <= 30){
    	return "Sobrepeso"
    }
    else if(imc >30 && imc <= 35){
    	return "Obesidade Moderada"
    }
    else if(imc >35 && imc <= 40){
	    return "Obesidade Severa"
    }
    else if(imc >40 && imc <= 50){
    	return "Obesidade Morbida"
    }
    else{
    	return 'Gordo'
    }
}

console.log(rimc(80,1.80))