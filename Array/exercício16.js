let cores = ["amarelo" , "azul" , "verde", "violeta", "vermelho"];
cores.splice(4,1);
cores.splice(0,0, "roxo");
cores.splice(3,1);
cores.splice(3,1, "preto");
cores.splice(2,0, "vermelho");
console.log(cores);