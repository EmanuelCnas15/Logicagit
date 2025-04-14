const prompt=require('prompt-sync')();
function converterDolarParaReal(valorDolar, cotacao){
    return valorDolar * cotacao;
}
let dola = Number(prompt("Digite um valor em dólar:"));
let cotacao = Number(prompt("Digite a cotação atual do dolar: "));
let resultado = converterDolarParaReal(dola, cotacao);
console.log(resultado);