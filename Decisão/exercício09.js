const prompt = require('prompt-sync')();
let n1 = Number(prompt('Digite a primeira nota: '));
let n2 = Number(prompt('Digite a segunda nota: '));
if ((n1 + n2) / 2 >= 7) {
    console.log('Aprovado');
} else { 
    console.log('Reprovado');
}