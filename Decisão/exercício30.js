const prompt = require('prompt-sync')();

let nota1 = prompt('Digite a primeira nota: ');
let nota2 = prompt('Digite a segunda nota: ');
let frequencia = prompt('Digite a frequência: ');

let media = Number(nota1) + Number(nota2) / 2;

if (media >= 7 && frequencia >= 75) {
    console.log("Aprovado");
} 
else {
    console.log("Reprovado");
}