const prompt = require ('prompt-sync')();

let notas = [];

notas[0] = Number(prompt("Digite a nota 1: "));
notas[1] = Number(prompt("Digite a nota 2: "));

media = (notas[0] + notas[1]) / 2;

console.log("A média é: " + media);
console.log("Notas: " + notas[0] + " e " + notas[1]);
console.log("Vetor completo:", notas);
