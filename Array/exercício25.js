let numeros = [1, 2, 3, 4, 5];
let numeroProcurado = 3;

if (numeros.includes(numeroProcurado)) {
    let posicao = numeros.indexOf(numeroProcurado);
    console.log("O número existe no array:", numeroProcurado, "na posição:", posicao);
} else {
    console.log("O número não existe no array:", numeroProcurado);
}