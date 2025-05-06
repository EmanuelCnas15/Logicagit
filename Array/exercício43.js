const prompt = require ('prompt-sync')();

let num = [];
let posicao = 0;
for (let i = 0; true; i++) {
    num[i] = prompt("Digite um número (-1 para sair): ");
    if (num[i] == -1) {
        break;
    } 
}
for (let i = 0; i < num.length; i++) {
    if (num[i] > num[posicao]) {
        posicao = i;
    }
}
console.log("O maior número é: " + num[posicao]);

soma = 0;
for (let i = 0; i < num.length; i++) {
    soma += Number(num[i]);
}
console.log("A soma dos números é: " + soma);