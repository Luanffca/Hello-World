// Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

const valorTotal = (300*100)/60;
console.log(`O valor total da bicicleta é: R$${valorTotal}`);

const valorComLucro = valorTotal * 1.25;
console.log(`O valor da bicicleta para que se obtenha lucro de 25% é: R$${valorComLucro}`);
