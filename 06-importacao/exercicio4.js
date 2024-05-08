/*
Faça um programa que calcule e imprima o salario a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salario e o adicional dos beneficios
O salario a ser transferido é calculado da seguinte maneira:

O valor bruto do salario - percentual do imposto mediante a faixa salarial + adicional dos beneficios

Para calcular o percentual de imposto segue as aliquotas:

De R$0 a 1100 = 5%
De 1100.01 a 2500 = 10%
Maior que 2500 = 15%
*/
//import {gets, print } from './funcoes-auxiliares2.js';



const {gets, print} = require('./funcoes-auxiliares4')
const salarioBruto = gets();
const beneficio = gets();
const imposto = calcularImposto(salarioBruto);

const salarioFinal = calcularSalario(salarioBruto, imposto, beneficio);

print(salarioFinal)

function calcularImposto(salarioBruto){
    let imposto;
    if(salarioBruto <= 1100){
        return imposto = salarioBruto * 0.05;
    }else if(salarioBruto > 1100 && salarioBruto <= 2500){
        return imposto = salarioBruto * 0.10;
    }else if (salarioBruto > 2500){
        return imposto = salarioBruto * 0.15;
    } 
}
function calcularSalario(salarioBruto, imposto, beneficio){
    return salario = salarioBruto - imposto + beneficio;    
}
