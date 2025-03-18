const prompt = require('prompt-sync')();
let usuario = prompt('Você tem passe vip? (S/N) ');
let idade = prompt('Digite a idade: ');
let lista_de_convidados = prompt('Seu nome está na lista de convidados? (S/N) ');
if (usuario == 'S')
    console.log('Entrada livre!');
else if (idade >= 18 && lista_de_convidados == 'S')
    console.log('Entrada permitida!');
else
    console.log('Entrada negada!');