const prompt = require ('prompt-sync')();
let reais = prompt("Digite o valor em reais: ");
let reais_1 = Number(reais);
let dólar = reais_1 / 5.765;
console.log("O valor em dólar é: " + dólar);