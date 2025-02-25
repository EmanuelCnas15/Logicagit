const prompt = require ('prompt-sync')();
let precolitor = Number(prompt ("Digite o preço do litro do combustível(Em R$):"));
let distancia = Number (prompt (" Digite a distância percorrida (Em Km):"));
let consumo = Number (prompt (" Digite o consumo do veículo (Em Km/L):"));
let litros = distancia / consumo;
let valor = litros * precolitor;
console.log ("Sera necessário abastecer" + litros + "litros");
console.log ("O custo sera R$" + valor);