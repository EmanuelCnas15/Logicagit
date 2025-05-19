let nomes = [
    {nome: "Julia Pariz", notas: 9.5},
    {nome: "Ana Julia", notas: 9.0},
    {nome: "João Emanuel", notas: 10.0},
];

let notasMaiorque8 = [];
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i].notas > 8) {
        notasMaiorque8.push(nomes[i]);
    }
}

console.log("A quantidade de alunos com notas maiores que 8 é: " + notasMaiorque8.length);
