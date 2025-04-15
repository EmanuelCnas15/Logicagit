export function saudacao(nome){
    return "Olá, " + nome;
}
export function calcularIdade(anoNascimento){
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}
export default function mensagemPadrao(){
    return "Bem-vindo ao nosso sistema!";
}
