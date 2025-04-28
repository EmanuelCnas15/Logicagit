const prompt = require ('prompt-sync')();
let numeros = [];
for (let i = 0; i < 10; i++){
    numeros[i] = prompt("Digite um numero para a posção " +i+ ": ");
}
console.log("Então a sequencia de números é: " + numeros);