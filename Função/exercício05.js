const prompt = require('prompt-sync')();
const nome = prompt("Digite seu nome: ");
function saudacao(nome) {
    console.log("Olá, " + nome + ", boa tarde!");
}
saudacao(nome);

