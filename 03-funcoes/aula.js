function writeMyName(name){
    console.log('Seu nome é: ', name);
}
function verificarMaioridade(idade){
    if (idade >= 18) {
        return 'Maior de Idade';
    }else {
        return 'Menor de Idade';
    }
}
(function(){
    const name = 'Lais';
    const idade = 22;
    writeMyName(name);
    console.log(verificarMaioridade(idade))
})();