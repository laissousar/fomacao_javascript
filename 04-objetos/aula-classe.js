class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever (){ 
        console.log(`meu nome é ${this.nome} e minha é ${this.idade}`)
    }
}

const vitor = new Pessoa('Vitor Sousa', 22);

const renan = new Pessoa();
renan.nome = 'Renan'

const ricardo = new Pessoa('Ricardo Novais', 15);

vitor.descrever();

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }
    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.idade} tem a mesma idade`);
    } 
}

compararPessoas(vitor, ricardo);