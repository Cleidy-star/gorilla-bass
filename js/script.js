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

function atacar() {
  let alvos = 5;
  let ataques = 0;
  for (let i = 0; i < humanos.length && ataques < alvos; i++) {
  }
  humanosRestantes -= ataques;
  atualizarStatus();
  salvarEstado();
  renderizarHumanos();
  verificarFimDeJogo();
}

function defender() {
  log("Gorila está em posição de defesa!");
}

function curar() {
  gorilaVida = Math.min(100, gorilaVida + 10);
  log("Gorila recuperou 10 pontos de vida!");
  atualizarStatus();
  salvarEstado();
}
