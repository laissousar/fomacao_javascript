const alunos = ['Joao', 'Vitor', 'Marina'];

alunos.push('Renan'); //add
alunos.pop() //remove o ultimo
alunos.shift() // remove o primeiro

alunos[5] = 'Vini';

console.log(alunos); 

//FOR
// string é uma lista de carcteres
let soma = 0;
const notas = [5, 10, 8];
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;
}
const media = soma /notas.length;
console.log(media.toFixed(2) )