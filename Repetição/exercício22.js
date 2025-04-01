const prompt = require('prompt-sync')();
let soma = 0, notas, media;
let quantidade = 0;
while (notas != -1){
    notas = Number(prompt('Digite a nota do aluno: '));
    if ( notas != -1 ){
        soma += notas;
        quantidade++;
    }
}
media = soma / quantidade;
console.log('A média das notas é: ' + media);