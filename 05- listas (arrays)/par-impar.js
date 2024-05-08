//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numero = 25;
let auxNumero = 25;
pares = [];
pares2 = [];

for (let i = 0; i <= numero; i++) {
    if(auxNumero % 2 == 0){
        pares[i] = auxNumero;
    }
    auxNumero -= 1;
}
console.log(pares)

const lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

for (let i = 0; i <= lista.length; i++) {
    if(lista[i] % 2 == 0){
        pares2[i] = lista[i];
    }
}
console.log(pares2)