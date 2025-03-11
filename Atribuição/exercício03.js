const prompt = require('prompt-sync')();

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));

// Operadores aritméticos
console.log(`Soma: ${num1 + num2}`);
console.log(`Subtração: ${num1 - num2}`);
console.log(`Multiplicação: ${num1 * num2}`);
console.log(`Divisão: ${num1 / num2}`);

// Operadores relacionais
console.log(`O primeiro número é maior que o segundo: ${num1 > num2}`);
console.log(`Os dois números são iguais: ${num1 === num2}`);

// Operadores lógicos
console.log(`Ambos os números são maiores que 0: ${num1 > 0 && num2 > 0}`);
console.log(`Pelo menos um número é negativo: ${num1 < 0 || num2 < 0}`);

// Operadores de atribuição
let num1Copy = num1;
let num2Copy = num2;

num1Copy += num2Copy;
num1Copy /= 2;
console.log(`Primeiro número após atribuição: ${num1Copy}`);

num2Copy = num1 % num2;
console.log(`Segundo número após atribuição: ${num2Copy}`);