// Imprima na tela a partir de 20 e depois de 10 em 10 até o 100, 
// mas em vez dos numeros 60 e 90 imprima a palavra "CONTINUE".

for(let i = 20; i <= 100; i++){
    if(i === 30){
        for(let j = 30; j <= 100; j+=10){
            if (j === 60){
                console.log("CONTINUE")
                continue;
            }
            
            if (j === 90){
                console.log("CONTINUE")
                continue;
            }
            console.log(j)
        }
        break
    }
    console.log(i)
}