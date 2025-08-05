/*
Fazer um programa para ler dois números inteiros, e dizer se um número é múltiplo do outro. Os números podem ser digitados em qualquer ordem.
*/

import prompt from "prompt-sync";
const input = prompt();

let number1 = Number(input("Digite um numero inteiro: "));
let number2 = Number(input("Digite outro numero inteiro: "));

if (number1 % number2 == 0 || number2 % number1 == 0) {
  console.log("São multiplos");
} else {
  console.log("Não são multiplos");
}
