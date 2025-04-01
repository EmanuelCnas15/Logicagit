const prompt = require('prompt-sync')();

const numeroAleatorio = Math.floor(Math.random() * 101); // Número aleatório de 0 a 100
let tentativa = -1;
let pontuacao = 100; // Pontuação inicial

console.log("Tente adivinhar o número entre 0 e 100!");

while (tentativa !== numeroAleatorio) {
    tentativa = parseInt(prompt("Digite seu palpite: "), 10);

    if (isNaN(tentativa) || tentativa < 0 || tentativa > 100) {
        console.log("Por favor, insira um número válido entre 0 e 100.");
        continue;
    }

    pontuacao -= 10; // Deduz 10 pontos por tentativa errada

    if (tentativa < numeroAleatorio) {
        console.log("Muito baixo! O número sorteado é maior. Tente novamente.");
    } else if (tentativa > numeroAleatorio) {
        console.log("Muito alto! O número sorteado é menor. Tente novamente.");
    } else {
        console.log(`Parabéns! Você acertou! Sua pontuação final é: ${pontuacao}`);
    }
}