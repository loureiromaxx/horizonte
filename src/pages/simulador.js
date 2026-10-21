import { calcularPlanoCompleto } from "../lib/calculos.js";
import { exibirMsgErro, validarDados } from "../lib/simulador-validacao.js";
import { formatarMoeda } from "../lib/formatadores.js";
import { carregarPlano, salvarPlano } from "../lib/plano-storage.js";

function salvarDados(dados, plano) {
    
    const erros = validarDados(dados);
    exibirMsgErro(erros, dados);

    if (Object.keys(erros).length !== 0) {
        return;
    }

    const planoAtualizado = {
        ...plano,
        idade: Number(dados.idadeInput.value),
        patrimonio: Number(dados.patrimonioInput.value),
        renda: Number(dados.rendaInput.value),
        inflacao: Number(dados.inflacaoInput.value)
    };

    salvarPlano(planoAtualizado);
    location.reload();
}

function carregarDados(dados) {
    const plano = carregarPlano();
    const projecao = calcularPlanoCompleto(plano);

    dados.idadeInput.value = plano.idade;
    dados.patrimonioInput.value = plano.patrimonio;
    dados.rendaInput.value = plano.renda;
    dados.inflacaoInput.value = plano.inflacao;

    dados.aporteMensal.innerText = `Plano atual (${formatarMoeda(plano.aporte)} por mês)`;

    dados.projecaoIdade.textContent = projecao.idadeNaMeta === null ? "Meta não atingida" : `${projecao.idadeNaMeta} anos`;

    dados.projecaoData.textContent = projecao.anoChegada === null ? "" : `${projecao.mesDoAno}/${projecao.anoChegada}`;

    dados.projecaoAnos.textContent = `Patrimônio em ${projecao.anosAteMeta ?? "—"} anos`;

    dados.projecaoPatrimonio.textContent = projecao.idadeNaMeta === null || projecao.patrimonioMeta === null ? "Meta não atingida" : formatarMoeda(projecao.patrimonioMeta);

    dados.projecaoAportes.textContent = projecao.totalAportado === null ? "Meta não atingida" : formatarMoeda(projecao.totalAportado);

    return plano;
}

const dados = {
        idadeInput: document.querySelector('#idade'),
        patrimonioInput: document.querySelector('#patrimonio-atual'),
        rendaInput: document.querySelector('#renda-mensal'),
        inflacaoInput: document.querySelector('#inflacao'),
        aporteMensal: document.querySelector('#aporte-mensal'),
        projecaoIdade: document.querySelector('#idade-projecao'),
        projecaoData: document.querySelector('#data-projecao'),
        projecaoAnos: document.querySelector('#anos-projecao'),
        projecaoPatrimonio: document.querySelector('#patrimonio-projecao'),
        projecaoAportes: document.querySelector('#aportes-projecao')
    }

let plano = carregarDados(dados);

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    salvarDados(dados, plano);
});
