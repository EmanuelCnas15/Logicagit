const prompt = require('prompt-sync')();
let compras = Number(prompt('Digite o valor total das suas compras: '));
let cupom = prompt('Digite o cupom de desconto: ');
if (cupom == 'SENAI10') {
    console.log('O valor total das suas compras com desconto é de R$' + (compras - (compras * 2.0)));
} else { 
    console.log('O valor total das suas compras é de R$' + compras);
}