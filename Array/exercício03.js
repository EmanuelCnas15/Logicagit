const prompt = require ('prompt-sync')();

let testefisico = [];

testefisico[0] = Number(prompt("Digite o resultado do teste físico 1: "));
testefisico[1] = Number(prompt("Digite o resultado do teste físico 2: "));

media = (testefisico[0] + testefisico[1]) / 2;

console.log("A média é: " + media);
console.log("Resultados: " + testefisico[0] + " e " + testefisico[1]);
console.log("Vetor completo:", testefisico);
