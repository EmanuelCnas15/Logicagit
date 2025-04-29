const prompt = require ('prompt-sync')();

let salario = [];
for (let i = 0; i < 10; i++) {
    salario[i] = prompt("Digite o salário do funcionário " + i + ": ");
}
console.log("Os salários dos funcionários são: ");
for (let i = 0; i < salario.length; i++) {
    console.log(salario[i]);
}
