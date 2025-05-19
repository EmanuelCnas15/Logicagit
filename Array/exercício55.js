const prompt = require('prompt-sync')(); 

let matriz = [[], [], []];


for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor para a posição [${i}][${j}]: `));
    }
}


console.log("Matriz 3x3:");
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(' '));
}


console.log("Elementos do eixo principal:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);
}