const prompt = require ('prompt-sync')();

let num = [];

num[1] = Number(prompt("Digite um número para a posição 1: "));
num[2] = Number(prompt("Digite um número para a posição 2: "));
num[3] = Number(prompt("Digite um número para a posição 3: "));
num[4] = Number(prompt("Digite um número para a posição 4: "));

soma = num[1] + num[2] + num[3] + num[4];

console.log("A soma é: " + soma);
console.log("Números: " + num[1] + ", " + num[2] + ", " + num[3] + ", " + num[4]);
console.log("Vetor completo:", num);