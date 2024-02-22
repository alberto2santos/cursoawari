const numeros = window.prompt('Digite aqui 5 números inteiros separados por vírgula:');
const valores = numeros.split(',');

if (valores.length !== 5) {
    console.log('Por favor, insira exatamente 5 números inteiros separados por vírgula.');
} else {
    let total = 0;
    for (let i = 0; i < valores.length; i++) {
        total += parseInt(valores[i]);
    }
    const media = total / valores.length;
    console.log('Média:', media);
}
