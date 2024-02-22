const input = prompt('Digite um número inteiro:');

var quadrado = '';

for (let i = 1;i <= input; i++) {
    for (let j = 1;j <= input; j++){
        quadrado += '*';
    };
    quadrado += '\n';
}
console.log(quadrado);