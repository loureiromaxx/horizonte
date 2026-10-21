import { listarMetas } from "../lib/metas-storage.js";

document.addEventListener('DOMContentLoaded', renderizarMetas);

window.addEventListener("metas:atualizadas", renderizarMetas);

export function renderizarMetas() {
    const container = document.getElementById('lista-metas');
    if (!container) return;

    const metas = listarMetas();

    container.innerHTML = '';

    if (metas.length === 0) {
        container.innerHTML = `
            <div class="p-6 text-center text-mut text-sm">
                Ainda não possui nenhuma meta. Crie a sua primeira meta ao lado!
            </div>
        `;
        return;
    }

    const formataDinheiro = (valor) => Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const formatarData = (dataString) => {
        const [ano, mes] = dataString.split('-');
        const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        return `${meses[parseInt(mes) - 1]}/${ano}`;
    };

    const calcularMesesRestantes = (dataAlvo) => {
        const [ano, mes] = dataAlvo.split('-');
        const dataFutura = new Date(ano, mes - 1);
        const dataAtual = new Date();
        const diffMeses = (dataFutura.getFullYear() - dataAtual.getFullYear()) * 12 + (dataFutura.getMonth() - dataAtual.getMonth());
        return diffMeses > 0 ? diffMeses : 1; 
    };

    metas.forEach((meta, index) => {
        const porcentagem = meta.valorMeta > 0 ? ((meta.valorAtual / meta.valorMeta) * 100).toFixed(0) : 0;
        const mesesRestantes = calcularMesesRestantes(meta.dataDesejada);
        const valorFaltante = meta.valorMeta - meta.valorAtual;
        const poupancaMensal = valorFaltante > 0 ? valorFaltante / mesesRestantes : 0;

        const borderClass = index !== metas.length - 1 ? 'border-b border-line' : '';

        const cardHTML = `
            <div class="flex min-w-0 flex-col gap-2 p-4 sm:p-6 ${borderClass}">
                <div class="flex flex-wrap items-center justify-between gap-2 font-bold text-base sm:text-lg">
                    <span class="min-w-0 break-words">${meta.nome}</span>
                    <span class="shrink-0 rounded-full bg-suns px-3 py-1 text-sm text-sun-dark">até ${formatarData(meta.dataDesejada)}</span>
                </div>
                
                <div class="h-3.5 bg-seas rounded-full my-1">
                    <div class="h-full bg-sun rounded-full" style="width: ${Math.min(porcentagem, 100)}%"></div>
                </div>
                
                <div class="flex flex-wrap justify-between gap-2 text-sm text-mut">
                    <span class="break-words">${formataDinheiro(meta.valorAtual)} de ${formataDinheiro(meta.valorMeta)}</span>
                    <span class="flex shrink-0 gap-4">
                        <button data-acao="editar" data-id="${meta.id}" class="text-sea font-bold underline cursor-pointer hover:text-sea-dark">Editar</button>
                        <button data-acao="excluir" data-id="${meta.id}" class="text-red-600 font-bold underline cursor-pointer hover:text-red-800">Excluir</button>
                    </span>
                </div>
                
                <div class="mt-1 flex flex-wrap justify-between gap-1 text-sm text-mut">
                    <span class="break-words">Guarde cerca de ${formataDinheiro(poupancaMensal)} por mês, além do seu aporte</span>
                    <span class="shrink-0">${porcentagem}% concluído</span>
                </div>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}