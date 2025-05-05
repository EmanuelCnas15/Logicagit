const prompt = require('prompt-sync')();

let num = [];

for (let i = 0; true; i++) {
    num[i] = prompt("Digite um número (-1 para sair): ");
    if (num[i] == -1) {
        break;
    } 
}

let soma = 0;
for (let i = 0; i < num.length; i++) {
    soma += Number(num[i]);
}

let media = soma / (num.length); 
console.log("A soma dos números é: " + soma);
console.log("A média dos números é: " + media);