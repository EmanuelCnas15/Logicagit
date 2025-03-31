const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativa = 0;
let tentativasTotais = 0;

console.log("Tente adivinhar o número aleatório entre 1 e 10!");

while (tentativa !== numeroAleatorio) {
    tentativa = parseInt(prompt("Digite seu palpite: "), 10);
    tentativasTotais++;

    if (tentativa < numeroAleatorio) {
        console.log("Muito baixo! Tente novamente.");
    } else if (tentativa > numeroAleatorio) {
        console.log("Muito alto! Tente novamente.");
    } else {
        console.log(`Parabéns! Você acertou em ${tentativasTotais} tentativas!`);
        console.log(`Sua pontuação: ${Math.max(10 - tentativasTotais + 1, 0)} pontos.`);
    }
}