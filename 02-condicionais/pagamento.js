/*
Elabora um  algoritmo que calcule o que deve ser pago por um produto.
Utilizando as condições da tabgela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

Condições:
1 à vista no debito, recebe desconto de 10%;
2 à vista no pix ou no dinheiro, recebe 15% de desconto;
3 em duas vezes, preço normal, sem juros;
4 acima de duas vezes, preço normal, com juros de 10%;

*/

const valorProduto = 100;
const formaPagamento = 1;
let valorProdutoFinal;

if (formaPagamento == 1) {
    const desconto = (valorProduto * 10) / 100;
    valorProdutoFinal = valorProduto - desconto;
}else if (formaPagamento == 2) {
    const desconto = (valorProduto * 15) / 100;
    valorProdutoFinal = valorProduto - desconto;
}else if (formaPagamento == 3) {
    valorProdutoFinal = valorProduto;
}else{
    const juros = (valorProduto * 10) / 100;
    valorProdutoFinal = valorProduto + juros;
}
console.log('O valor final do produto é: ', valorProdutoFinal);