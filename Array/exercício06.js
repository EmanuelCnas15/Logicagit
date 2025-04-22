const prompt = require ('prompt-sync')();

let salarios = [];

salarios[0] = Number(prompt("Digite o salário 1: "));
salarios[1] = Number(prompt("Digite o salário 2: "));

console.log("O maior salário é: " + Math.max(salarios[0], salarios[1]));
console.log("O menor salário é: " + Math.min(salarios[0], salarios[1]));
console.log("O salário 1 é: " + salarios[0]);
console.log("O salário 2 é: " + salarios[1]);
console.log("Vetor completo:", salarios);



