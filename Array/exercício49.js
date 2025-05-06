const prompt = require('prompt-sync')();

// Gerar 6 números aleatórios entre 1 e 100 e armazená-los em um vetor
let numerosSorteados = [];
while (numerosSorteados.length < 6) {
    let numero = Math.floor(Math.random() * 100) + 1;
    if (!numerosSorteados.includes(numero)) {
        numerosSorteados.push(numero);
    }
}

// Solicitar ao usuário para digitar 6 números
let numerosUsuario = [];
for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt(`Digite o número ${i + 1} (entre 1 e 100): `));
    if (numero >= 1 && numero <= 100) {
        numerosUsuario.push(numero);
    } else {
        console.log("Número inválido! Digite um número entre 1 e 100.");
        i--;
    }
}

// Calcular a pontuação do usuário
let pontos = 0;
for (let numero of numerosUsuario) {
    if (numerosSorteados.includes(numero)) {
        pontos++;
    }
}

// Exibir a pontuação final
console.log(`Os números sorteados foram: ${numerosSorteados.join(", ")}`);
console.log(`Você acertou ${pontos} número(s)!`);
