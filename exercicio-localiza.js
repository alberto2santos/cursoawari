//Promoção
class Promocao {
    constructor(titulo, descricao, dataValidade) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.dataValidade = dataValidade;
    }
}
// Dados Pessoais Padrão
class DadosPessoais {
    constructor(nome, cpf, idade, endereco, telContato) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.endereco = endereco;
        this.telContato = telContato;
    }
}

// Informações dos funcionários
class Funcionario extends DadosPessoais {
    constructor(dadosPessoais, dataContratacao, salario, alugueisRealizados, status) {
        super(dadosPessoais.nome, dadosPessoais.cpf, dadosPessoais.idade, dadosPessoais.endereco, dadosPessoais.telContato);
        this.dataContratacao = dataContratacao;
        this.salario = salario;
        this.alugueisRealizados = alugueisRealizados;
        this.status = status;
        this.reservaAtiva = null;
    }
    temReservaAtiva() {
        return this.reservaAtiva !== null;
    }
}

// Informações dos clientes
class Clientes extends DadosPessoais {
    constructor(dadosPessoais, habilitacao, email) {
        super(dadosPessoais.nome, dadosPessoais.cpf, dadosPessoais.idade, dadosPessoais.endereco, dadosPessoais.telContato);
        this.habilitacao = habilitacao;
        this.email = email;
    }
    enviarPromocaoPorEmail(promocao) {
        const destinatario = this.email;
        const assunto = promocao.titulo;
        const corpo = promocao.descricao;
        const validade = promocao.dataValidade;

        enviarEmail(this.email, `Promoção: ${promocao.titulo}`, promocao.descricao, `Promoção valida até:${promocao.dataValidade}`);
    }
}

class Habilitacao extends Clientes {
    constructor(dadosPessoais, habilitacao, email, foto, numeroRegistro, vencimento) {
        super(dadosPessoais, habilitacao, email);
        this.foto = foto;
        this.numeroRegistro = numeroRegistro;
        this.vencimento = vencimento;
    }
}

//Informações sobre os carros
class Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao) {
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
        this.modelo = modelo;
        this.quilometragem = quilometragem;
        this.valorDiario = valorDiario
        this.observacao = observacao;
    }
    carroEsportivo(velocidade, melhorias) {
        this.velocidade = velocidade;
        this.melhorias = melhorias;
    }
    carroUtilitario(assentos, kmLitro, bagageiro) {
        this.assentos = assentos;
        this.kmLitro = kmLitro;
        this.bagageiro = bagageiro
    }
};

class Categorias {
    constructor() {
        this.esportivo = [];
        this.utilitarios = [];
    }
    adicionarCarroEsportivo(carro) {
        this.esportivo.push(carro);
    }

    adicionarCarroUtilitario(carro) {
        this.utilitarios.push(carro);
    }
    getCarrosEsportivos() {
        return this.esportivo;
    }

    getCarrosUtilitarios() {
        return this.utilitarios;
    }
};

//Informações sobre a reserva.
class Reserva {
    constructor(cliente, codigo, status, dataInicio, dataFim, funcionario) {
        this.cliente = cliente;
        this.codigo = codigo;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.status = status;
        this.funcionario = funcionario;
    }
};

function enviarEmail(destinatario, assunto, corpo,dataValidade) {
    console.log(`Enviando e-mail para: ${destinatario}`);
    console.log(`Assunto: ${assunto}`);
    console.log(`Corpo do e-mail: ${corpo}`);
    console.log(`Promoção válida até: ${dataValidade}`);
}
