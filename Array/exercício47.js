const prompt = require ('prompt-sync')();

let num = [];
let estaoentre50e100 = 0;

for (let i = 0; i < 10; i++) {
    num[i] = prompt("Digite um número " + (i + 1) + ": ");
    if (num[i] >= 50 && num[i] <= 100) {
        estaoentre50e100++;
    }
}

console.log("A quantidade de números entre 50 e 100 é: " + estaoentre50e100);