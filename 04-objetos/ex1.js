/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    consumoKmL;

    constructor(marca, cor, consumoKmL){
        this.marca = marca;
        this.cor = cor;
        this.consumoKmL = consumoKmL
    }
    calcularGastoDePercurso(valorCombustivel, distanciaKm, consumoKmL){
        const gastoCombustivel = ((distanciaKm/consumoKmL) * valorCombustivel).toFixed(2);
        return gastoCombustivel;
    }
}

(function (){
    const distanciaKm = 300;
    const carro = new Carro('Fiat', 'Vermelho', 5);
    const valorCombustivel = 6.45;

    console.log(`O valor para percorrer ${distanciaKm}km no carro da ${carro.marca} é de: R$${carro.calcularGastoDePercurso(valorCombustivel, distanciaKm, carro.consumoKmL)}`)
})();