const prompt = require('prompt-sync')(); // Certifique-se de instalar o pacote 'prompt-sync'

let matriz = [[], []];


for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor para a posição [${i}][${j}]: `));
    }
}

console.log("Matriz 2x2:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(' '));
}