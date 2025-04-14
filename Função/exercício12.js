const prompt = require('prompt-sync')();
function numeroaleatorio() {
    let numero = Math.floor(Math.random() * 100) + 1;
    return numero;
}
let numero = numeroaleatorio();
console.log("O número aleatório gerado é: " + numero);