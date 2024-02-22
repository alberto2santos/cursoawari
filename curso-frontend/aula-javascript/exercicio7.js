const numero = window.prompt('Digite um número inteiro:');

const numPar = [];
const numImpar = [];

for(var i = 1;i <= numero; i++){
    if (i % 2 === 0){
        evens.push(i);
    } else {
        odds.push(i);
    }
};