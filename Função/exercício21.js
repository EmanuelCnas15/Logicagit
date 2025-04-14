const prompt = require('prompt-sync')();
function porcentagemdedesconto(){
    let valor = prompt("Digite o valor do produto: ");
    let desconto = prompt("Digite o percentual de desconto: ");
    let valorFinal = valor - (valor * (desconto / 100));
    return `O valor final do produto com desconto é: ${valorFinal}`;
}
let resultado = porcentagemdedesconto();
console.log(resultado);