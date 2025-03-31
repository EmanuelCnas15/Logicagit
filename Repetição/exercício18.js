const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativa = 0;


while (tentativa !== numeroAleatorio) {
    tentativa = parseInt(prompt("Digite seu palpite: "), 10);

    if (tentativa < numeroAleatorio) {
        console.log("Muito baixo! Tente novamente.");
    } else if (tentativa > numeroAleatorio) {
        console.log("Muito alto! Tente novamente.");
    } else {
        console.log("Parabéns! Você acertou!");
    }
}