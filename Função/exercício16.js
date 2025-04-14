const prompt = require('prompt-sync')();

function nome(n) {
    return `Olá, ${n}! Seja bem-vindo(a)!`;
}

let n = prompt("Digite seu nome: ");
let resultado = nome(n);
console.log(resultado);