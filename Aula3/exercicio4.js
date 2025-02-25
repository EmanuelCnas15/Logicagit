const prompt = require ('prompt-sync')();
let anos_1 = prompt("Digite a quantidade de anos que você trabalha");
let meses_1 = prompt("Digite a quantidade de meses que você trabalha");
let anos = Number(anos_1);
let meses = Number(meses_1);
let total = (anos * 12) + meses;
console.log("Voce trabalha a " + total + " meses");