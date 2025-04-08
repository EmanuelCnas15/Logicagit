const prompt = require('prompt-sync')();
let n1 = Number (prompt("Digite o primeiro número: "));
let n2 = Number (prompt("Digite o segundo número: "));
function ordemcrescente (n1, n2) {
    if (n1 < n2) {
        console.log("A ordem crescente é: " + n1 + ", " + n2);
    } else if (n1 > n2) {
        console.log("A ordem crescente é: " + n2 + ", " + n1);
    } else {
        console.log("Os números são iguais.");
    }
}
ordemcrescente(n1, n2);