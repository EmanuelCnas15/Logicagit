const prompt = require ('prompt-sync')();
let carros = [];
for (let i = 0; i < 5; i++) {
    carros[i] = prompt("Digite uma marca de carro para a posição " + i + ": ");
}
carros.reverse();
console.log("Então a sequencia de marcas é: " + carros);