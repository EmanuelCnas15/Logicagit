const prompt = require('prompt-sync')();
function metropracentimetro(){
    let metros = Number(prompt("Digite o valor em metros:"));
    let centimetros = metros * 100;
    return centimetros;
}
let centimetros = metropracentimetro();
console.log("O valor em centimetros é: " + centimetros);