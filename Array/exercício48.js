const prompt = require('prompt-sync')();

let array = [];
for (let i = 0; i < 6; i++) {
    array[i] = parseInt(prompt("Digite um número para a posição " + i + ": "));
}

console.log("Posições dos valores iguais a 0:");
for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        console.log("Posição: " + i);
    }
}