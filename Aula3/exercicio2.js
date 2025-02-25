const prompt = require ('prompt-sync')();
let prova1 = prompt("Nota da primeira prova: ");
let prova2 = prompt("Nota da segunda prova: ");
let trabalho_1 = prompt("Nota do primeiro trabalho: ");
let media_aritmetica = (Number(prova1) + Number(prova2) + Number(trabalho_1)) / 3;
console.log("A média aritmetica é:" + media_aritmetica);