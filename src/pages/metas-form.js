import { criarMeta } from "../lib/metas-storage.js";
import { validarMeta } from "../lib/validacao.js";

const form = document.querySelector("#form-meta");

function lerCampos() {
  const dados = new FormData(form);
  return {
    nome: dados.get("nome"),
    valorMeta: Number(dados.get("valorMeta")),
    valorAtual: Number(dados.get("valorAtual") || 0),
    dataDesejada: dados.get("dataDesejada"),
  };
}

function mostrarErros(erros) {
  form.querySelectorAll("[data-erro]").forEach((el) => {
    el.textContent = erros[el.dataset.erro] ?? "";
  });
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const meta = lerCampos();
  const erros = validarMeta(meta);
  mostrarErros(erros);

  if (Object.keys(erros).length > 0) return;

  criarMeta(meta);
  form.reset();
  window.dispatchEvent(new CustomEvent("metas:atualizadas"));
});

document.querySelector("#btn-cancelar").addEventListener("click", () => {
  form.reset();
  mostrarErros({});
});