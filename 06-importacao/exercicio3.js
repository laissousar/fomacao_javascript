/*
2) Faça um programa que receba N (quantidade de numeros) e seus respectivos valores.
Imprima o maior par e o menor impar.

*/
const {gets, print} = require("./funcoes-auxiliares")
//import { gets } from "./funcoes-auxiliares";
const quantidadeDeNumeros = 10;
let maiorPar = 0;
let menorImpar = null;
let numero = null;

for(let i = 0; i < quantidadeDeNumeros; i++){
    numero = gets();
    if(numero % 2 == 0){
        if(maiorPar === null || numero > maiorPar){
            maiorPar = numero
        } 
    } else {
        if( menorImpar === null || numero < menorImpar){
            menorImpar = numero;
        }
    }
}
/* print(maiorPar);
print(menorImpar); */
