const prompt = require('prompt-sync')();
function cubo(n) {
    return n ** 3;
}
let n = prompt("Digite um número: ");
let resultado = cubo(n);
console.log(`O cubo de ${n} é ${resultado}`);