//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
let nomes = [
    "Ana",
    "Bernardo",
    "Carlos",
    "Vanessa",
    "Diego",
    "Fernanda",
    "Victor",
    "Gustavo",
    "Valentina"
  ];
  let nome;

for (let i = 0; i < nomes.length; i++) {
    nome = nomes[i];
    if (nome[0] === 'V') { 
        console.log(nome);
    }

}