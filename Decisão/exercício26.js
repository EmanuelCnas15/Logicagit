const prompt = require('prompt-sync')();

let saldo = 500; // Exemplo de saldo da conta
let valorSaque = 100; // Exemplo de valor de saque

if (saldo >= valorSaque) {
    if (valorSaque % 10 === 0) {
        console.log("Saque realizado com sucesso");
        saldo -= valorSaque; // Atualiza o saldo após o saque
    } else {
        console.log("Valor inválido para saque");
    }
} else {
    console.log("Saldo insuficiente");
}