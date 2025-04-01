const prompt = require('prompt-sync')();
let sorteado = Math.floor(Math.random() * 100)
let tentativas = 1;
let numero;
numero = Number(prompt("Digite um número:"));
while (numero !=sorteado){
    tentativas++;
    if (numero > sorteado){
        console.log("É maior: ");
    }else{
        console.log("É menor:");
    }
    numero = Number(prompt("Digite outro número:"));
}
console.log("Muito bem, você acertou o número após " + tentativas + " tentativas.");