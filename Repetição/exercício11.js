const prompt = require('prompt-sync')(); 

for (let i = 1; i <= 5; i++) {
    const num1 = Math.floor(Math.random() * 10) + 1; 
    const num2 = Math.floor(Math.random() * 10) + 1; 
    const resultado = num1 * num2;

    console.log(`Tentativa ${i}:`);
    const resposta = parseInt(prompt(`Qual é o resultado de ${num1} x ${num2}? `));

    if (resposta === resultado) {
        console.log("Parabéns! Você acertou!");
    } else {
        console.log(`Errado! O resultado correto era ${resultado}.`);
    }
}

console.log("Fim do programa!");