const prompt = require('prompt-sync')();

const correctUser = "admin";
const correctPassword = "123";

const user = prompt("Digite o usuário: ");
const password = prompt("Digite a senha: ");

let loginSuccess = (user === correctUser && password === correctPassword) ? true : false;
console.log(loginSuccess);
