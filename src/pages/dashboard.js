import {carregarPlano} from "../lib/plano-storage.js";
import {listarMetas} from "../lib/metas-storage.js";
import {formatarMoeda, formatarPrevisao} from "../lib/formatadores.js";
import {calcularPlanoCompleto} from "../lib/calculos.js";

const plano = carregarPlano();
const metas = listarMetas();

console.log("Dados do plano carregados: ", plano);
console.log("Metas carregadas: ", metas);

function renderizarIndicadores(dados) {
  const calculos = calcularPlanoCompleto(dados);

  const dataChegada = calculos.anoChegada === null
    ? "—"
    : `${calculos.mesDoAno}/${calculos.anoChegada}`;
  const idadeChegada = calculos.idadeNaMeta === null ? "—" : `aos ${calculos.idadeNaMeta} anos`;
  const anosRestantes = calculos.anosAteMeta ?? "—";

  document.getElementById("indicador-patrimonio").textContent = formatarMoeda(dados.patrimonio);
  document.getElementById("indicador-aporte").textContent = formatarMoeda(dados.aporte);
  document.getElementById("indicador-meta").textContent = `${formatarMoeda(dados.renda)}/mês`;
  document.getElementById("indicador-chegada").textContent = dataChegada;
  document.getElementById("indicador-idade").textContent = idadeChegada;

  const Anos = document.getElementById("anos-restantes");
  if (Anos) {
    Anos.textContent = anosRestantes;
  }
}

const METAS_PADRAO = [
  { nome: "Reserva de emergência", valorAtual: 8000, valorMeta: 15000, dataDesejada: "2027-04" },
  { nome: "Primeiros R$ 50 mil", valorAtual: 8000, valorMeta: 50000, dataDesejada: "2029-06" },
  { nome: "R$ 250 mil", valorAtual: 8000, valorMeta: 250000, dataDesejada: "2038-09" },
];

function renderizarProximasMetas(listaMetas) {
  const container = document.getElementById("container-proximas-metas");
  if (!container) {
    return;
  }

  const metasParaExibir = listaMetas.length > 0 ? listaMetas.slice(0, 3) : METAS_PADRAO;

  container.innerHTML = metasParaExibir
    .map((meta) => {
      let progresso = 0;

      if (meta.valorMeta > 0) {
        progresso = Math.min(100, Math.round((meta.valorAtual / meta.valorMeta) * 100));
      }else{
        progresso = 0;
      }

      return `
            <div>
                <div class="flex justify-between text-[15px]">
                    <b>${meta.nome}</b>
                    <span class="text-mut text-sm">${formatarMoeda(meta.valorAtual)} de ${formatarMoeda(meta.valorMeta)}</span>
                </div>
                <div class="h-2 bg-seas rounded-full my-2">
                    <div class="h-full bg-sea rounded-full" style="width: ${progresso}%"></div>
                </div>
                <small class="text-mut">${formatarPrevisao(meta.dataDesejada)}</small>
            </div>
        `;
    }).join("");
}

renderizarIndicadores(plano);
renderizarProximasMetas(metas);
