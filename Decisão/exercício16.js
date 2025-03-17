const prompt = require('prompt-sync')();

let valorCompra = prompt('Digite o valor da sua compra: R$ ');
let valorFinal;

if (valorCompra < 100) {
    valorFinal = valorCompra;
} else if (valorCompra < 500) {
    valorFinal = valorCompra * 0.90; // 10% de desconto
} else {
    valorFinal = valorCompra * 0.80; // 20% de desconto
}

console.log(`O valor final da sua compra é: R$ ${valorFinal.toFixed(2)}`);