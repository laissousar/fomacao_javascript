/* Faça um programa para calcular o valor de uma valor_viagem

Você terá cinco variaveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da Gasolina;
3 - O tipo de preco_combustivel que está no seu conusmo_carro_km_l;
4 - Gasto médio do comustivel do carro por Media;
5 - Distancia em Km da valor_viagem;

Imprima no console o valor que será gasto para realizar essa valor_viagem. */

const valorEtanol = 5.79;
const valorGasolina = 6.67;
const tipoCombustivel = 'Gasolina';
const consumoCarroKmL = 10;
const distanciaKm = 100;
const consumoViagem = distanciaKm/consumoCarroKmL
let valorViagem = 0;

if (tipoCombustivel === 'Etanol'){
    valorViagem = consumoViagem * valorEtanol;
}else if (tipoCombustivel === 'Gasolina') {
    valorViagem = consumoViagem * valorGasolina;
}

console.log(valorViagem.toFixed(2));


