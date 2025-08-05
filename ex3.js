/* 
Fazer um programa para ler a quantidade de glicose no sangue de uma pessoa e depois mostrar na tela a classificação desta glicose de acordo com a tabela de referência ao lado. 
*/
import prompt from "prompt-sync";
const input = prompt();

const medidaGlicose = Number(input("Digite a medida da glicose: "));

if (medidaGlicose <= 100) {
  console.log("Classificação: normal");
} else if (medidaGlicose <= 140) {
  console.log("Classificação: elevado");
} else {
  console.log("Classificação: diabetes");
}
