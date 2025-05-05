let notas = [9, 10, 2.5, 5, 7, 8.5, 9.5, 6, 4, 3.5];
let aprovados = notas.every(function(nota){
    return nota >= 7;
})
console.log(aprovados);