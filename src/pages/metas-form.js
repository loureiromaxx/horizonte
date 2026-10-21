import { criarMeta, buscarMeta, atualizarMeta, excluirMeta } from "../lib/metas-storage.js";
import { validarMeta } from "../lib/validacao.js";

const form = document.querySelector("#form-meta");
const titulo = document.querySelector("#titulo-form");
const botaoSalvar = document.querySelector("#btn-salvar");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

let idEmEdicao = null;
let temporizador;

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

function mostrarSucesso(texto) {
  mensagemSucesso.textContent = texto;
  mensagemSucesso.classList.remove("hidden");
  clearTimeout(temporizador);
  temporizador = setTimeout(() => mensagemSucesso.classList.add("hidden"), 3000);
}

function entrarModoEdicao(meta) {
  idEmEdicao = meta.id;
  form.elements.nome.value = meta.nome;
  form.elements.valorMeta.value = meta.valorMeta;
  form.elements.valorAtual.value = meta.valorAtual;
  form.elements.dataDesejada.value = meta.dataDesejada;
  titulo.textContent = "Editar meta";
  botaoSalvar.textContent = "Salvar alterações";
  mostrarErros({});
}

function voltarModoCriacao() {
  idEmEdicao = null;
  form.reset();
  titulo.textContent = "Nova meta";
  botaoSalvar.textContent = "Salvar meta";
  mostrarErros({});
}

document.addEventListener("click", (evento) => {
  const botao = evento.target.closest('[data-acao="editar"]');
  if (!botao) return;

  evento.preventDefault();
  const meta = buscarMeta(botao.dataset.id);
  if (meta) entrarModoEdicao(meta);
});

document.addEventListener("click", (evento) => {
  const botao = evento.target.closest('[data-acao="excluir"]');
  if (!botao) return;

  evento.preventDefault();
  const meta = buscarMeta(botao.dataset.id);
  if (!meta) return;

  const confirmou = window.confirm(`Excluir a meta "${meta.nome}"?`);
  if (!confirmou) return;

  excluirMeta(meta.id);

  if (idEmEdicao === meta.id) {
    voltarModoCriacao();
  }

  mostrarSucesso("Meta excluída!");
  window.dispatchEvent(new CustomEvent("metas:atualizadas"));
});

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const meta = lerCampos();
  const erros = validarMeta(meta);
  mostrarErros(erros);

  if (Object.keys(erros).length > 0) return;

  if (idEmEdicao) {
    atualizarMeta(idEmEdicao, meta);
    mostrarSucesso("Meta atualizada!");
  } else {
    criarMeta(meta);
    mostrarSucesso("Meta salva!");
  }

  voltarModoCriacao();
  window.dispatchEvent(new CustomEvent("metas:atualizadas"));
});

document.querySelector("#btn-cancelar").addEventListener("click", voltarModoCriacao);