const prompt = require('prompt-sync')();
let n = Number (prompt("Digite um número: "));
function numero (n){
    let resultado = n % 2 == 0;
console.log("O número " + n + " é par?: " + resultado);
}
numero(n);
