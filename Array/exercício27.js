const prompt = require ('prompt-sync')();

let salario = [];
for (let i = 0; i < 10; i++) {
    salario[i] = prompt("Digite o salário do funcionário " + i + ": ");
}
console.log("Os salários dos funcionários são: ");

for (let i = 0; i < salario.length; i++) {
    console.log(salario[i]);
}

soma = (0);
for (let i = 0; i < salario.length; i++) {
    soma += Number(salario[i]);
}
console.log("A soma dos salários é: " + soma);

let media = soma / salario.length;
console.log("A média dos salários é: " + media);

