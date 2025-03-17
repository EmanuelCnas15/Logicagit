const prompt = require('prompt-sync')();
let idade = 20;
let temAutorizacaoDosPais = true;

if (idade >= 18) {
    console.log("Pode viajar sozinha");
} else {
    if (temAutorizacaoDosPais) {
        console.log("Pode viajar com autorização dos pais");
    } else {
        console.log("Menor de idade, não pode viajar sozinha");
    }
}