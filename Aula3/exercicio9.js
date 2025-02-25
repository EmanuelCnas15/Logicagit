const prompt = require ('prompt-sync')();
let preco = Number(69.90)
let gramasporpessoa = Number(400);
const pessoas = prompt("Digite a quantidade de pessoas: ");
let kgporpessoa = gramasporpessoa/1000; 
let kgcarne = pessoas * kgporpessoa;
console.log(" Você precisa comprar " + kgcarne + " kg de carne");
console.log(" Se você for comprar maminha, tera que pagar R$ " + kgcarne + preco);
