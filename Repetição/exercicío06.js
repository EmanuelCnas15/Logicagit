let numero = parseInt(prompt("Digite o número para a tabuada: "));
let inicio = parseInt(prompt("Digite o início do intervalo: "));
let fim = parseInt(prompt("Digite o fim do intervalo: "));

console.log(`Tabuada do número ${numero}:`);
for (let i = inicio; i <= fim; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}