const prompt = require('prompt-sync')();
let numero = Number(prompt('Digite um número: '));
if (numero){
    console.log('Este número é par!');
} else {
    console.log('Este número é ímpar!');
}