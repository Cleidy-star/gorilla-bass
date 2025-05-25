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

function renderizarHumanos() {
  const container = document.getElementById("humanos");
  const base = document.getElementById("humanoMolde");
  container.innerHTML = '';
  container.appendChild(base);

  for (let i = 0; i < humanos.length; i++) {
    const novo = base.cloneNode();
    novo.removeAttribute("id");
    novo.style.display = "inline";
    if (!humanos[i]) novo.classList.add("morto");
    container.appendChild(novo);
  }
}

function atualizarStatus() {
  document.getElementById("gorilaVida").textContent = gorilaVida;
  document.getElementById("humanosRestantes").textContent = humanosRestantes;
}

function log(mensagem) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML += `<p>${mensagem}</p>`;
  logDiv.scrollTop = logDiv.scrollHeight;
}

function salvarEstado() {
  localStorage.setItem("gorilaVida", gorilaVida);
  localStorage.setItem("humanos", JSON.stringify(humanos));
}

function carregarEstado() {
  const vida = localStorage.getItem("gorilaVida");
  const humanosSalvos = localStorage.getItem("humanos");
  if (vida) gorilaVida = parseInt(vida);
  if (humanosSalvos) {
    humanos = JSON.parse(humanosSalvos);
    humanosRestantes = humanos.filter(h => h).length;
  }
}

function reiniciarJogo() {
  localStorage.clear();
  gorilaVida = 100;
  humanos = Array(100).fill(true);
  humanosRestantes = 100;
  atualizarStatus();
  renderizarHumanos();
  document.querySelectorAll("button").forEach(btn => btn.disabled = false);
  log("Jogo reiniciado!");
}

