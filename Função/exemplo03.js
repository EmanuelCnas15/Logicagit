const prompt = require('prompt-sync')();
function areaQuadrado(){
    let lado = Number(prompt("Digite o valor do lado do quadrado: "));
    let area = lado * lado;
    return area;
}
let area= areaQuadrado();
console.log("A área do quadrado :" ,area);