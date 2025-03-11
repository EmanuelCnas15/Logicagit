const prompt = require('prompt-sync')();
let media = parseFloat(prompt("Digite a média do aluno: "));
let faltas = parseInt(prompt("Digite o número de faltas do aluno: "));
let reprovado = media <= 7 || faltas > 20;
console.log(reprovado);
