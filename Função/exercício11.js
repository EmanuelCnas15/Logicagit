const prompt = require('prompt-sync')();
function valorabsoluto() {
    let numero = Number(prompt("Digite um número: "));
    let valorabsoluto = 0;
    if (numero < 0) {
        valorabsoluto = numero * -1;
    } else {
        valorabsoluto = numero;
    }
    return valorabsoluto;
}

console.log("O valor absoluto é: " + valorabsoluto());