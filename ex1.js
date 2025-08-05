/* Uma operadora de telefonia cobra R$ 50.00 por um plano básico que dá direito a 100 minutos de
telefone. Cada minuto que exceder a franquia de 100 minutos custa R$ 2.00. Fazer um programa para
ler a quantidade de minutos que uma pessoa consumiu, daí mostrar o valor a ser pago. */

import prompt from "prompt-sync";
const input = prompt();

const minutosConsumidos = Number(
  input("Digite a quantidade de minutos consumidos: ")
);

let valorAPagar = 50;

if (minutosConsumidos > 100) {
  valorAPagar = valorAPagar + 2 * (minutosConsumidos - 100);
}
console.log(`Valor a ser pago: R$ ${valorAPagar.toFixed(2)}`);
