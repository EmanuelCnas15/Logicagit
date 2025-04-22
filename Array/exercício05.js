const prompt = require ('prompt-sync')();

let num = [];

num[0] = Number(prompt("Digite um número para a posição 0: "));
num[1] = Number(prompt("Digite um número para a posição 1: "));

console.log("O número "+num[0]+" está na posição 0");
console.log("O número "+num[1]+" está na posição 1");
console.log(" O maior número é: " + Math.max(num[0], num[1]));
console.log("O menor número é: " + Math.min(num[0], num[1]));