const prompt = require ('prompt-sync')();

let num = [];
for (let i = 0; i < 10; i++) {
    num[i] = prompt("Digite o número " + i + ": ");
}

console.log("Os números  pares são: ");
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) {
        console.log(num[i]);
    }
}

console.log("Já a quantidade de números ímpares digitados é: ");
let cont = (0);
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 != 0) {
        cont++;
    }
}
console.log(cont);

console.log("A soma de tudo é: ");
let soma = (0);
for (let i = 0; i < num.length; i++) {
    soma += Number(num[i]);
}
console.log(soma);