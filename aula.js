
/* Faça um programa para calcuolar o  valor de uma viagem

1. Preço do combustivel
2. Gasto medio de combustivel por km
3. Distancia em km da viagem */

let preco_combustivel = 5.79;
let conusmo_carro_km_l = 3;
let distancia_km = 200;
let valor_viagem = 0;

valor_viagem = (distancia_km/conusmo_carro_km_l) * preco_combustivel;

console.log('Valor da Viagem: ', valor_viagem.toFixed(2)); /*duas casas decimais*/