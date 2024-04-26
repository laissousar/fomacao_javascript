/*
Elabora um  algoritmo que calcule o que deve ser pago por um produto.
Utilizando as condições da tabgela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

Condições:
1 à vista no debito, recebe desconto de 10%;
2 à vista no pix ou no dinheiro, recebe 15% de desconto;
3 em duas vezes, preço normal, sem juros;
4 acima de duas vezes, preço normal, com juros de 10%;

*/

function aplicarDesconto(valorProduto, desconto) {
    return valorProduto - ((valorProduto * desconto) / 100);    
}
function aplicarJuros(valorProduto, juros) {
    return valorProduto - ((valorProduto * juros / 100));    
}
(function () {
    const valorProduto = 100;
    const formaPagamento = 1;
    let valorProdutoFinal;

    if (formaPagamento == 1) {
        valorProdutoFinal = aplicarDesconto(valorProduto, 10);
    }else if (formaPagamento == 2) {
        valorProdutoFinal = aplicarDesconto(valorProduto, 15);
    }else if (formaPagamento == 3) {
        valorProdutoFinal = valorProduto;
    }else{
        valorProdutoFinal = aplicarJuros(valorProduto, 10);
    }
    console.log('O valor final do produto é: ', valorProdutoFinal);    
})();
