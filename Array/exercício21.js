const prompt = require ('prompt-sync')();
let carros = [];
for (let i = 0; i < 5; i++) {
    carros.unshift(prompt("Digite uma marca de carro para a posição " + i + ": "));
}
console.log("Então a sequencia de marcas é: " + carros);

