/*
1) Faça um programa que receba a media de um aluno,
caso a media seja < 5 imprima "Reprovado"
caso a media seja >= 5 e < 7 imprima "Recuperação"
caso a media seja >= 7 imprima "Aprovado"

*/

const { gets, print } = require("./funcoes-auxiliares2");

const mediaNotas = gets(5);

if (mediaNotas < 5) {
    print('Reprovado');
} else if (mediaNotas >= 5 && mediaNotas < 7){
    print('Recuperação')
} else {
    print('Aprovado')
}