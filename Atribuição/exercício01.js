const prompt = require('prompt-sync')();

let n = parseFloat(prompt('Digite um valor: '));
n += 3;
n *= 2;
n /= 4;

console.log('O valor final de n é: ' + n);