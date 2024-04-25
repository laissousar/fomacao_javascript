/*
Calcule o IMC de pessoa
Formula IMC:
IMC = peso / (altura * altura)

Elabora um algoritmo que dado o peso e a altura de um adulto
mostre sua condição de acordo com a tabela abaixo.
IMC em adultos Condição:
- Abaixo de 18.5 = Abaixo do peso;
- Entre 18.5 e 25 Peso Normal;
-  Entre 25 e 30 acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 - obesidade grave

*/
function calcularIMC(peso, altura){
    return peso / Math.pow(altura, 2);
}
function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso';
    } else if ( imc >= 18.4 && imc < 25){
        return 'Peso Normal';
   } else if (imc >= 25 && imc < 30){
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40 ){
        return 'Obesidade';
 } else {
        return 'Obesidade Grave';
    }
}


(function () {
    const pesoEmKg = 75;
    const alturaEmM = 1.7;
    const imc =  calcularIMC(pesoEmKg, alturaEmM);   
    console.log(classificarImc(imc));
})();


