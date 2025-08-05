/*
Uma lanchonete possui vários produtos. Cada produto possui um código e um preço. Você deve fazer um programa para ler o código e a quantidade comprada de um produto (suponha um código válido),
e daí informar qual o valor a ser pago, com duas casas decimais, conforme tabela de produtos ao lado. 
*/

import prompt from "prompt-sync";
const input = prompt();

const codigoProduto = Number(input("Codigo do produto comprado (1 a 5): "));
const quantidadeComprada = Number(input("Quantidade comprada: "));
let valorDoCodigo, valorAPagar;

switch (codigoProduto) {
  case 1:
    valorDoCodigo = 5.0;
    valorAPagar = valorDoCodigo * quantidadeComprada;
    console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);
    break;
  case 2:
    valorDoCodigo = 3.5;
    valorAPagar = valorDoCodigo * quantidadeComprada;
    console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);
    break;
  case 3:
    valorDoCodigo = 4.8;
    valorAPagar = valorDoCodigo * quantidadeComprada;
    console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);
    break;
  case 4:
    valorDoCodigo = 8.9;
    valorAPagar = valorDoCodigo * quantidadeComprada;
    console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);
    break;
  case 5:
    valorDoCodigo = 7.32;
    valorAPagar = valorDoCodigo * quantidadeComprada;
    console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);
    break;

  default:
    console.log("Opção inválida, tente um número entre 1 e 5");
}
