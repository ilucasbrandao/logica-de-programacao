/*
Deseja-se converter uma medida de temperatura da escala Celsius para Fahrenheit ou vice-versa. Para
isso, você deve construir um programa que leia a letra "C" ou "F" indicando em qual escala vai ser
informada uma temperatura. Em seguida o programa deve mostrar a temperatura na outra escala com
duas casas decimais. A seguir é dada a fórmula para converter de Fahrenheit para Celsius (você deve
deduzir a fórmula de Celsius para Fahrenheit): C = 5 / 9 *(F - 32)
*/

import prompt from "prompt-sync";
const input = prompt();

const tipoDeTemperatura = input(
  "Voce vai digitar a temperatura em qual escala (C/F)? "
);
let fahrenheit, celsius;

switch (tipoDeTemperatura) {
  case "F":
    fahrenheit = Number(input("Digite a temperatura em Fahrenheit: "));
    celsius = (5 / 9) * (fahrenheit - 32);
    console.log(`Temperatura equivalente em Celsius: ${celsius.toFixed(2)} ºC`);
    break;

  case "C":
    celsius = Number(input("Digite a temperatura em Celsius: "));
    fahrenheit = celsius * 1.8 + 32;
    console.log(
      `Temperatura equivalente em Fahrenheit: ${fahrenheit.toFixed(2)} ºF`
    );
    break;
  default: {
    console.log('Opção inválida, por favor, digite "C" ou "F".');
    break;
  }
}
