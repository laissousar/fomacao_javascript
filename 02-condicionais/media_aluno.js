/*
1) Faça um algoritmo que dado 3 notas tiradas por aluno em um semestre
da faculcudade calcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

Classificação:
- Media menor que 5, reprovação
-Media entre 5 e 7, recuperação
- Media acima de 7, passou de semestre
*/

const primeiraNota = 5;
const segundaNota = 3;
const terceiraNota = 7;

const mediaNotas = (primeiraNota + segundaNota + terceiraNota) / 3;

if (mediaNotas < 5) {
    console.log('Reprovado');
} else if (mediaNotas >= 5 && mediaNotas < 7){
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}
console.log('Médio do aluno: ',mediaNotas)