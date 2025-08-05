/* Uma operadora de telefonia cobra R$ 50.00 por um plano básico que dá direito a 100 minutos de
telefone. Cada minuto que exceder a franquia de 100 minutos custa R$ 2.00. Fazer um programa para
ler a quantidade de minutos que uma pessoa consumiu, daí mostrar o valor a ser pago. */

import prompt from "prompt-sync";
const input = prompt();

const minutosConsumidos = Number(
  input("Digite a quantidade de minutos consumidos: ")
);

const planoBasico = 50;
const franquiaMinutos = 100;
const custoPorMinutosExcedentes = 2;

let valorAPagar;

if (minutosConsumidos <= franquiaMinutos) {
  valorAPagar = planoBasico;
} else {
  const minutosExcedentes = minutosConsumidos - franquiaMinutos;
  valorAPagar = planoBasico + minutosExcedentes * custoPorMinutosExcedentes;
}
console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
