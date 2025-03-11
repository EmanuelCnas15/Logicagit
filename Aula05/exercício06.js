const prompt = require('prompt-sync')();

const numero = parseFloat(prompt("Digite um número: "));

const mensagens = [
  "O número é menor que 10.",
  "O número está entre 10 e 100.",
  "O número é maior que 100."
];

const index = (numero < 10) * 0 + (numero >= 10 && numero <= 100) * 1 + (numero > 100) * 2;

console.log(mensagens[index]);