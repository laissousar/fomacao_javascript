const numero = 15;

/* === -> compara o valor e o tipo da variavel | == -> compara só o valor */
// utiizar prefixo is quando é uma varivel boolena
const isnumeroPar = (numero % 2) === 0;

if(isnumeroPar){
    console.log('Par');
} else {
    console.log('Impar');
}


const isnumeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0){
    console.log('Número invalido');
} else if(numero === 5){
    console.log('Número invalido');
} else if (isnumeroDivisivelPor5) {
    console.log ('Sim');
} else {
    console.log('Não');
}