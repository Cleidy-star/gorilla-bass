let gorilaVida = 100; 
let humanos = Array(100).fill(true);
let humanosRestantes = 100;

document.addEventListener("DOMContentLoaded", () => {
  carregarEstado();
  renderizarHumanos();
  atualizarStatus();
  iniciarAtaquesHumanos();
  setInterval(() => {
    if (humanosRestantes > 0 && gorilaVida > 0) {
      atirarVariasBalas();
      const dano = Math.floor(Math.random() * 5) + 1;
      gorilaVida = Math.max(0, gorilaVida - dano);
      atualizarStatus();
      log(`Humanos dispararam ${dano > 1 ? `${dano} balas` : `1 bala`} e causaram ${dano} de dano!`);
      salvarEstado();
      verificarFimDeJogo();
    }
  }, 3000);
});
