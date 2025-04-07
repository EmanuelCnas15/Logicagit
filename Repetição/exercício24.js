const prompt = require('prompt-sync')(); 
let n;
let soma = 0;
do {
    n = parseInt(prompt("Digite um número: "));
    soma+=n; 
    console.log(soma);
    }

while (n !== 0);
