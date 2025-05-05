let filmes = [
    {titulo: 'O Senhor dos Anéis', ano: 2001, diretor: 'Peter Jackson'},
    {titulo: 'Harry Potter e a Pedra Filosofal', ano: 2001, diretor: 'Chris Columbus'},
    {titulo: 'O Poderoso Chefão', ano: 1972, diretor: 'Francis Ford Coppola'},
    {titulo: 'Pulp Fiction', ano: 1994, diretor: 'Quentin Tarantino'},
    {titulo: 'A Lista de Schindler', ano: 1993, diretor: 'Steven Spielberg'}
];


let shiftFilmes = filmes.shift();
console.log(shiftFilmes);

let popFilmes = filmes.pop();
console.log(popFilmes);