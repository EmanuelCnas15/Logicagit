const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um número: '));
let resultado = (numero % 2 == 0) ? 'O número é par.' : 'O número é ímpar.';
console.log(resultado);
