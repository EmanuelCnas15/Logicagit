const prompt = require('prompt-sync')();
let usuario = "admin"; // Substitua pelo valor de entrada do usuário
let senha = "1234"; // Substitua pelo valor de entrada da senha

if (usuario === "admin") {
    if (senha === "1234") {
        console.log("Login bem-sucedido");
    } else {
        console.log("Senha incorreta");
    }
} else {
    console.log("Usuário não encontrado");
}