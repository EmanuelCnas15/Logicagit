const prompt = require('prompt-sync')();
let numero;
let soma = 0;
for(let i =1; i<=3; i++){
numero = Number(prompt("Digite um número: "));
soma += numero;
}
let media = soma / 3;
console.log("A média dos números é: " + media);
