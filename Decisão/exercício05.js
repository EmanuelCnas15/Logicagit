const prompt = require('prompt-sync')();
let digiteseunome = prompt('Digite seu nome: ');
if (digiteseunome ) {
    console.log('Olá, ' + digiteseunome + '!');
} else {
    console.log('erro');
}