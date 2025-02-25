const prompt = require ('prompt-sync')();
let largura1 = prompt("Digite a largura do terreno (Em m²):" );
let profundidade1 = prompt("Digite a profundidade do terreno (Em m²):" );
let largura_1 = Number(largura1);
let profundidade_1 = Number(profundidade1);
let area = largura_1 * profundidade_1;
console.log("A área do terreno é: " + area + "m²");