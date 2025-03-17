const prompt = require('prompt-sync')();
let notaTeorica = 75; // Exemplo de nota teórica
let passouTestePratico = true; // Exemplo de resultado do teste prático

if (notaTeorica >= 70) {
    if (passouTestePratico) {
        console.log("Aprovado no concurso");
    } else {
        console.log("Reprovado no teste prático");
    }
} else {
    console.log("Reprovado na prova teórica");
}