const prompt=require('prompt-sync')();

function nome(n) {
    return `Olá, ${n} ${n2} ! Seja bem-vindo(a)!`;
}

let n = prompt("Digite seu nome: ");
let n2 = prompt("Digite seu sobrenome: ");
let resultado = nome(n);
console.log(resultado);