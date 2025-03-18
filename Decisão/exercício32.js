const prompt = require('prompt-sync')();

let cliente = prompt('Digite seu nome: ');
let desconto = prompt('Você tem cupom ou cartão fidelidade? ');

if (desconto === 'Sim' || desconto === 'Tenho') {
    console.log('Desconto aplicado!');
} else {
    console.log('Sem desconto');
}