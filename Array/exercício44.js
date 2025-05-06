const prompt = require ('prompt-sync')();

let num = [];
let maiorque10 = 0;

for (let i = 0; true; i++) {
    num[i] = prompt("Digite um número (-1 para sair): ");
    if (num[i] == -1) {
        break;
    } 
}
for (let i = 0; i < num.length; i++) {
    if (num[i] > 10) {
        maiorque10++;
    }
}
console.log("A quantidade de números maiores que 10 é: " + maiorque10);

soma = 0;
for (let i = 0; i < num.length; i++) {
    soma += Number(num[i]);
}
console.log("A soma dos números é: " + soma);