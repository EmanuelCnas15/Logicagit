import PromptSync from "prompt-sync";
const prompt = PromptSync();

let larguraInput = Number(prompt("Digite a largura do retângulo: "));
let comprimentoInput = Number(prompt("Digite o comprimento do retângulo: "));
let area = larguraInput * comprimentoInput;
console.log(`A área do retângulo é: ${area}`);