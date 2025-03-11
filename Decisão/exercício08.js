const prompt = require('prompt-sync')();
let numerosorteado = Math.floor(Math.random() * 10);
let numerodigitado = Number(prompt('Digite um número de 0 a 10: '));
if (numerodigitado == numerosorteado) {
    console.log('Parabéns, você acertou!');
}