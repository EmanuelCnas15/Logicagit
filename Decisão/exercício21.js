const prompt = require('prompt-sync')();

let peso = prompt('Digite seu peso em kg: ');
let altura = prompt('Digite sua altura em metros: ');

let imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc < 18.5) {
    console.log('Classificação: Abaixo do peso');
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Classificação: Peso normal');
} else if (imc >= 25 && imc <= 29.9) {
    console.log('Classificação: Sobrepeso');
} else {
    console.log('Classificação: Obesidade');
}