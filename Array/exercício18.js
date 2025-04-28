const prompt = require ('prompt-sync')();
let idade = [];
for (let i = 0; i < 4; i++){
    idade[i] = prompt("Digite uma idade para a posção " +1);
    console.log("Vetor completo:" , idade);
}
