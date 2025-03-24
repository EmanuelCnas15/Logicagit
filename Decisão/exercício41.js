const prompt = require('prompt-sync')();

let pontos = parseInt(prompt("Digite o número de pontos do motorista: "));

let status = pontos < 20 
    ? "Motorista regular" 
    : pontos <= 40 
        ? "Motorista com advertência" 
        : "Motorista com suspensão";

console.log(status);