const prompt = require ('prompt-sync')();

let num = [];
for (let i = 1; i < 10; i++) {
    num[i] = prompt("Digite o número " + i + ": ");
}

console.log("Os números positivos são: ");
for (let i = 1; i < num.length; i++) {
    if (num[i] > 0) {
        console.log(num[i]);
    }
}

console.log("Já os números negativos e zero digitados é: ");
for (let i = 1; i < num.length; i++) {
    if (num[i] <= 0) {
        console.log(num[i]);
    }
}