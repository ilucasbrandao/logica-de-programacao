/*
Fazer um programa para calcular o troco no processo de pagamento de um produto de uma mercearia.
O programa deve ler o preço unitário do produto, a quantidade de unidades compradas deste produto,
e o valor em dinheiro dado pelo cliente. Seu programa deve mostrar o valor do troco a ser devolvido
ao cliente. Se o dinheiro dado pelo cliente não for suficiente, mostrar uma mensagem informando o
valor restante conforme exemplo.
*/
import prompt from "prompt-sync";
const input = prompt();

const precoUnitario = Number(input("Preço unitário do produto: "));
const quantidadeComprada = Number(input("Quantidade comprada: "));
const valorRecebido = Number(input("Dinheiro recebido: "));
const valorDaVenda = precoUnitario * quantidadeComprada;
let troco;

if (valorRecebido >= valorDaVenda) {
  troco = valorRecebido - valorDaVenda;
  console.log(`Troco = ${troco.toFixed(2)}`);
} else {
  troco = valorDaVenda - valorRecebido;
  console.log(`Dinheiro insuficiente, faltam ${troco.toFixed(2)}`);
}
