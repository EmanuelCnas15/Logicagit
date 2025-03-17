const prompt = require('prompt-sync')();

let velocidade = 90; // Exemplo de velocidade do carro em km/h

if (velocidade > 80) {
    if (velocidade <= 100) {
        console.log("Multa leve");
    } else {
        console.log("Multa grave");
    }
} else {
    console.log("Velocidade permitida");
}