const prompt = require('prompt-sync')();

let idade = prompt('Digite a idade: ');
let passaporte = prompt('Possui passaporte? (S/N) ');
let visto_de_viajante = prompt('Possui visto de viajante? (S/N) ');

if (idade >= 18 && passaporte == 'S' && visto_de_viajante == 'S') {
    console.log('Pode viajar!');
} 
else {
    console.log('Não pode viajar!');
}