const prompt = require('prompt-sync')();
let quantidadeItens = 6; // Exemplo de quantidade de itens comprados
let valorTotal = 120; // Exemplo de valor total da compra em R$

if (quantidadeItens > 5) {
    if (valorTotal > 100) {
        valorTotal *= 0.8; // Aplica 20% de desconto
    } else {
        valorTotal *= 0.9; // Aplica 10% de desconto
    }
}

console.log(`Valor total após desconto: R$ ${valorTotal.toFixed(2)}`);