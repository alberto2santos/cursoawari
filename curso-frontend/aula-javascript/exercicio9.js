const nome = ['Claudio','Paulo','Pedro','Henrique','Fernando','Beto','Tiago','Marcos','Danilo','Pablo'];
const idade = [20,15,18,35,50,17,22,19,18,14];

var dadosPessoais = [];
var contadorMaiorIdade = 0;

for (let i = 0; i < nome.length; i++) {
    dadosPessoais.push({ nome: nome[i], idade: idade[i] });
}

for (let i = 0; i < dadosPessoais.length; i++) {
    if (dadosPessoais[i].idade >= 18) {
        contadorMaiorIdade++;
    }
}

console.log("Número de pessoas maiores de idade:", contadorMaiorIdade);