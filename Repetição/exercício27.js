const prompt = require('prompt-sync')(); 

let soma = 0;
let numero;

do {
    numero = Number(prompt("Digite um número positivo ou um número negativo para sair: "));
    soma += numero >= 0 ? numero : 0; 
} while (numero >= 0);

console.log(`A soma final dos números positivos é: ${soma}`);