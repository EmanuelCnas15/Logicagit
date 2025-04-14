const prompt = require('prompt-sync')();
function indicedemassacorporal() {
    let peso = Number(prompt("Digite seu peso em kg: "));
    let altura = Number(prompt("Digite sua altura em metros: "));
    let imc = peso / (altura * altura);
    return imc;
}
let imc = indicedemassacorporal();
console.log("Seu IMC é: " + imc);