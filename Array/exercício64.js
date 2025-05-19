let produtos = [
    {nome: "Caderno", preco: 15.90},
    {nome: "Caneta", preco: 2.50},
    {nome: "Borracha", preco: 1.50},
    {nome: "Lápis", preco: 1.00},
    {nome: "Papel", preco: 0.50}
];
 let total = 0;
 for (let i = 0; i < produtos.length; i++) {
     total += produtos[i].preco;
 }
    console.log("O total dos produtos é: " + total);