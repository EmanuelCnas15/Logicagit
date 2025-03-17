const prompt = require('prompt-sync')();

// Recebe as duas notas do aluno
const nota1 = parseFloat(prompt('Digite a primeira nota: '));
const nota2 = parseFloat(prompt('Digite a segunda nota: '));

// Calcula a média aritmética
const media = (nota1 + nota2) / 2;

// Verifica a situação do aluno de acordo com a média
if (media >= 7) {
    console.log('Aprovado');
} else if (media >= 5) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}