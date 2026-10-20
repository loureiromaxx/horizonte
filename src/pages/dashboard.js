import {carregarPlano} from "../lib/plano-storage.js";
import {listarMetas} from "../lib/metas-storage.js";
import {formatarMoeda} from "../lib/formatadores.js";

const plano = carregarPlano();
const metas = listarMetas();

console.log("Dados do plano carregados: ", plano);
console.log("Metas carregadas: ", metas);

function renderizarIndicadores(dados){
    document.getElementById("indicador-patrimonio").textContent = formatarMoeda(dados.patrimonioAtual);
    
    document.getElementById("indicador-aporte").textContent = formatarMoeda(dados.aporteMensal);

    document.getElementById("indicador-meta").textContent = `${formatarMoeda(dados.metaRenda)}/mês`;

    document.getElementById("indicador-chegada").textContent = `dez/${dados.anoChegada}`;
  
    document.getElementById("indicador-idade").textContent = `aos ${dados.idadeChegada} anos`;
}

renderizarIndicadores(plano);