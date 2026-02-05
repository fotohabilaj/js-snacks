console.log('hello');

let numeriDispari = []
for (let index = 0; index < 6; index++) {
    const numero = Number(prompt('digita un numero'));
    if(numero % 2 !=0){
        numeriDispari.push(numero)
    }
    
}
console.log(numeriDispari);
