const prompt = require ('prompt-sync')();
let numeros = [];
numeros[0] = Number(prompt("Digite um número para a posição 0: "));
numeros[1] = Number(prompt("Digite um número para a posição 1: "));

console.log("O número "+numeros[0]+" está na posição 0");
console.log("O número "+numeros[1]+" está na posição 1");

console.log("Vetor completo:", numeros);

