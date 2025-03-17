const prompt = require('prompt-sync')();

let media = 7.5; // Exemplo de média do aluno
let presenca = 80; // Exemplo de presença do aluno em porcentagem

if (media >= 7) {
    if (presenca > 75) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado por falta");
    }
} else {
    console.log("Reprovado por nota");
}