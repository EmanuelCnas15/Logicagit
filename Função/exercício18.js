const prompt = require('prompt-sync')();

function mesa(numeroMesa, prato) {
    return `Pedido confirmado: Mesa ${numeroMesa}, Prato: ${prato}`;
}

let numeroMesa = prompt("Digite o número da mesa: ");
let prato = prompt("Digite o nome do prato pedido: ");
console.log(mesa(numeroMesa, prato));