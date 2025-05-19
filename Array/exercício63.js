let produtos = [
    {nome: "Caderno", preco: 15.90},
    {nome: "Caneta", preco: 2.50},
    {nome: "Borracha", preco: 1.50},
    {nome: "Lápis", preco: 1.00},
    {nome: "Papel", preco: 0.50}
];


let produtosmenorque100 = []
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].preco < 100) {
        produtosmenorque100.push(produtos[i]);
    }
}
console.log("Os produtos com preço menor que 100 são: ");
for (let i = 0; i < produtosmenorque100.length; i++) {
    console.log(produtosmenorque100[i].nome);
}
