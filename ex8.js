/*
Uma empresa vai conceder um aumento percentual de salário aos seus funcionários dependendo de quanto
cada pessoa ganha, conforme tabela ao lado. Fazer um programa para ler o salário de uma pessoa, daí mostrar
qual o novo salário desta pessoa depois do aumento, quanto foi o aumento e qual foi a porcentagem de aumento. 
*/

import prompt from "prompt-sync";
const input = prompt();

const salario = Number(input("Digite o salario da pessoa: "));
let aumento, ajusteSalarial, porcentagem;

if (salario <= 1000) {
  porcentagem = 20;
  aumento = salario * (porcentagem / 100);
  ajusteSalarial = aumento + salario;
  console.log(
    `Novo Salário = R$ ${ajusteSalarial.toFixed(
      2
    )} \nAumento = ${aumento.toFixed(2)} \nPorcentagem = ${porcentagem.toFixed(
      2
    )}%`
  );
} else if (salario <= 3000) {
  porcentagem = 15;
  aumento = salario * (porcentagem / 100);
  ajusteSalarial = aumento + salario;
  console.log(
    `Novo Salário = R$ ${ajusteSalarial.toFixed(
      2
    )} \nAumento = ${aumento.toFixed(2)} \nPorcentagem = ${porcentagem.toFixed(
      2
    )}%`
  );
} else if (salario <= 8000) {
  porcentagem = 10;
  aumento = salario * (porcentagem / 100);
  ajusteSalarial = aumento + salario;
  console.log(
    `Novo Salário = R$ ${ajusteSalarial.toFixed(
      2
    )} \nAumento = ${aumento.toFixed(2)} \nPorcentagem = ${porcentagem.toFixed(
      2
    )}%`
  );
} else {
  porcentagem = 5;
  aumento = salario * (porcentagem / 100);
  ajusteSalarial = aumento + salario;
  console.log(
    `Novo Salário = R$ ${ajusteSalarial.toFixed(
      2
    )} \nAumento = ${aumento.toFixed(2)} \nPorcentagem = ${porcentagem.toFixed(
      2
    )}%`
  );
}
