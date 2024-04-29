
const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    descrever: function () {
        console.log('Meu nome é %s e minnha idade é %i', this.nome, this.idade);
    }
};

pessoa.altura = 1.69;

console.log({pessoa})

pessoa.descrever = function(){
    console.log('Meu nome é  %s', this.nome); //subescrever
}
pessoa.descrever()
delete pessoa.nome

console.log(pessoa)

//Acessar dinamicamente
pessoa['nome'] = 'teste'

