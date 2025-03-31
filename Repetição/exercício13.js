const prompt = require('prompt-sync')();
let numero;
while (numero != 0) {
  numero = Number(prompt("Digite um número (0 para sair):"));
  if (numero != 0) {
    console.log("Número:", numero);
  }
}