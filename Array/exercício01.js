const prompt = require ('prompt-sync')();

let cidades = [];

cidades[1] = prompt("Digite o nome da cidade 1: ");
cidades[2] = prompt("Digite o nome da cidade 2: ");
cidades[3] = prompt("Digite o nome da cidade 3: ");
cidades[4] = prompt("Digite o nome da cidade 4: ");

console.log("A cidade "+cidades[1]+" está na posição 1");
console.log("A cidade "+cidades[2]+" está na posição 2");
console.log("A cidade "+cidades[3]+" está na posição 3");
console.log("A cidade "+cidades[4]+" está na posição 4");

console.log("Vetor completo:", cidades);