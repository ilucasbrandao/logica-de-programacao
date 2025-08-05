/*
No arremesso de dardo, o atleta tem três chances para lançar o dardo à maior distância que conseguir.
Você deve criar um programa para, dadas as medidas das três tentativas de lançamento, informar qual
foi a maior. 

*/

import prompt from "prompt-sync";
const input = prompt();

const distancia1 = Number(input("Digite a primeira distância: "));
const distancia2 = Number(input("Digite a segunda distância: "));
const distancia3 = Number(input("Digite a terceira distância: "));

if (distancia1 > distancia2 && distancia1 > distancia3) {
  console.log(`Maior distância: ${distancia1}`);
} else if (distancia2 > distancia3) {
  console.log(`Maior distância: ${distancia2}`);
} else {
  console.log(`Maior distância: ${distancia3}`);
}
