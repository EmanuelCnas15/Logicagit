const prompt = require ('prompt-sync')();

let num = [];

for (let i = 0; true; i++) {
    num[i] = prompt("Digite um número (-1 para sair): ");
    if (num[i] == -1) {
        break;
    } 
}

soma = 0;
let countMaiorQue10 = 0;

for (let i = 0; i < num.length; i++) {
    soma += Number(num[i]);
    if (Number(num[i]) > 10) {
        countMaiorQue10++;
    }
}

console.log("A soma dos números é: " + soma);
console.log("Quantidade de números maiores que 10: " + countMaiorQue10);