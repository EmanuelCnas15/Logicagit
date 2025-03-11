const prompt = require('prompt-sync')();
let num1 = prompt('Digite o primeiro número: ');
let num2 = prompt('Digite o segundo número: ');
let num3 = prompt('Digite o terceiro número: ');
let n1 = parseFloat(num1);
let n2 = parseFloat(num2);
let n3 = parseFloat(num3);
if (n1 < n2 && n1 < n3) {
    console.log('O primeiro número é o menor.');
} else {
    console.log('O primeiro número não é o menor.');
}
