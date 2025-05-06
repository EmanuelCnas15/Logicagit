const prompt = require('prompt-sync')();

let num = [];
let somaImpares = 0;

for (let i = 0; i < 10; i++) {
    num[i] = parseInt(prompt("Digite um número " + (i + 1) + ": "));
    if (num[i] % 2 !== 0) { 
        somaImpares += num[i]; 
    }
}

console.log("A soma dos números ímpares é: " + somaImpares);