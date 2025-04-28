const prompt = require ('prompt-sync')();
let nomes = [];
for (let i = 0; i < 5; i++){
    nomes[i] = prompt("Digite um nome para a posção " +1);
    console.log("Vetor completo:" , nomes);
}
