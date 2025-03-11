const prompt = require('prompt-sync')();

const idade = parseInt(prompt('Qual a sua idade? '));
const estudante = prompt('Você é estudante? (s/n) ').toLowerCase();

const podeInscrever = (idade > 18 && estudante === 's') ? 'Você pode se inscrever na promoção.' : 'Você não pode se inscrever na promoção.';

console.log(podeInscrever);
