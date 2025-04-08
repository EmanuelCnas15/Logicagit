const prompt = require('prompt-sync')();

let n1 = Number (prompt("Digite o primeiro número: "));
let n2 = Number (prompt("Digite o segundo número: "));

function soma (n1, n2) {
       let resultado = n1 + n2;
         console.log("A soma de " + n1 + " + " + n2 + " é: " + resultado);
}
function subtracao (n1, n2) {
       let resultado = n1 - n2;
         console.log("A subtração de " + n1 + " - " + n2 + " é: " + resultado);
}
function multiplicacao (n1, n2) {   
       let resultado = n1 * n2;
         console.log("A multiplicação de " + n1 + " * " + n2 + " é: " + resultado);
}
function divisao (n1, n2) {
       let resultado = n1 / n2;
         console.log("A divisão de " + n1 + " / " + n2 + " é: " + resultado);
}
soma(n1, n2);
subtracao(n1, n2);
multiplicacao(n1, n2);
divisao(n1, n2);


