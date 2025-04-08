const prompt = require('prompt-sync')();

console.log(" MENU DE OPÇÕES ");
console.log(" Digite 1 para ver a ordem crescente");
console.log(" Digite 2 para ver a ordem decrescente");
console.log(" Digite 0 para sair");

let opcao;
let n1 = Number (prompt("Digite o primeiro número: "));
let n2 = Number (prompt("Digite o segundo número: "));

function ordemcrescente (n1, n2) {
opcao = Number(prompt("Digite uma opção: "));
    if (opcao == 1) {
        if (n1 < n2) {
            console.log("A ordem crescente é: " + n1 + ", " + n2);
        } else if (n1 > n2) {
            console.log("A ordem crescente é: " + n2 + ", " + n1);
        } else {
            console.log("Os números são iguais.");
        }
    } else if (opcao == 2) {
        if (n1 > n2) {
            console.log("A ordem decrescente é: " + n1 + ", " + n2);
        } else if (n1 < n2) {
            console.log("A ordem decrescente é: " + n2 + ", " + n1);
        } else {
            console.log("Os números são iguais.");
        }
    } else if (opcao == 0) {
        console.log("Saindo do sistema...");
    } else {
        console.log("Opção inválida. Tente novamente.");
    } 
}
ordemcrescente(n1, n2);