const prompt = require ('prompt-sync')();
let nota1 = prompt("Digite a primeira nota: ");
let peso1 = prompt("Digite o peso da primeira nota: ");
let nota2 = prompt("Digite a segunda nota: ");
let peso2 = prompt("Digite o peso da segunda nota: ");
let nota3 = prompt("Digite a terceira nota: ");
let peso3 = prompt("Digite o peso da terceira nota: ");
let nota4 = prompt("Digite a quarta nota:");
let peso4 = prompt("Digite o peso da quarta nota: ");
let nota5 = prompt("Digite a quinta nota: ");
let peso5 = prompt("Digite o peso da quinta nota: ");
let media_ponderada = (Number(nota1) * Number(peso1) + Number(nota2) * Number(peso2) + Number(nota3) * Number(peso3) + Number(nota4) * Number(peso4) + Number(nota5) * Number(peso5) ) / (Number(peso1) + Number(peso2) + Number(peso3) + Number(peso4) + Number(peso5));
console.log("A media ponderada é: " + media_ponderada);
// The difference between the snippets is that the first snippet calculates the area of a terrain, the second snippet calculates the sum, subtraction, multiplication and division of two numbers, the third snippet converts an amount in reais to dollars, the fourth snippet calculates the arithmetic mean of three numbers and the fifth snippet calculates the weighted average of five numbers.