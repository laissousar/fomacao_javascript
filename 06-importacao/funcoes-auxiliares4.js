entradas = [2000, 250];
let i = 0;

function print(texto){
    console.log(texto);
}
function gets(){
    valor = entradas[i]
    i++
    return valor
}
module.exports = {gets, print}