/*Leia a hora inicial e a hora final de um jogo. A seguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração mínima de 1 hora e máxima de 24 horas.
 */

import prompt from "prompt-sync";
const input = prompt();

const horaInicial = Number(input("Hora Inicial: "));
const horaFinal = Number(input("Hora Final: "));
let duracao;
if (horaInicial < horaFinal) {
  duracao = horaFinal - horaInicial;
} else {
  duracao = 24 - horaInicial + horaFinal;
}

console.log(`O jogo durou ${duracao} hora(s)`);
