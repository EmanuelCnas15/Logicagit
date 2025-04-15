import { metrosparacentimetros, centimetrosparametros} from "./funcoes.js";  
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valor = Number(prompt("Digite um valor em metros: "));
let resultado = metrosparacentimetros(valor);
console.log("O valor em centimetros é: " + resultado);

let valor2 = Number(prompt("Digite um valor em centimetros: "));
let resultado2 = centimetrosparametros(valor2);
console.log("O valor em metros é: " + resultado2);
