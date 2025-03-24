const prompt = require('prompt-sync')();
let usuario = prompt('Digite o nome do usuário: ');
let senha = prompt('Digite a senha do usuário: ');
let resultado = usuario === 'Admin' && senha === '1234' ? 'Usuário autenticado' : 'Usuário ou senha inválidos';
console.log(resultado);