const prompt = require('prompt-sync')();
let numero;
let soma = 0;
for(let i =1; i<=5; i++){
numero = Number(prompt("Digite um número: "));
soma += numero;
}
console.log("A soma dos números é: " + soma);