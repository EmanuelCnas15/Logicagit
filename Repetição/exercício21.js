const prompt = require('prompt-sync')();
let n = 0; 
let soma = 0; 
while (n < 100) { 
    soma = Number(prompt('Digite um número: '));
    n+=soma;
    console.log(`A soma dos números é: ${n}`);
    }