const prompt = require('prompt-sync')();
let valordacompra = Number(prompt('Digite o valor da compra: '));
let saldodisponivel = Number(prompt('Digite o saldo disponível: '));
if (valordacompra <= saldodisponivel) {
    console.log('Compra realizada com sucesso!');
} else {
    console.log('Saldo insuficiente');
}
