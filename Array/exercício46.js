const prompt = require ('prompt-sync')();

let num = [];

for (let i = 0; i < 6; i++) {
    num[i] = prompt("Digite um número " + (i + 1) + ": ");
}

map = num.map((n) => n * 3);
console.log(map);