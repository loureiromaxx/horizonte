import Chart from 'chart.js/auto';
import { calcularPlanoCompleto } from './calculos'
import { carregarPlano } from './plano-storage';

const plano = carregarPlano();
const projecao = calcularPlanoCompleto(plano);
const patrimonio = projecao.patrimonio5Anos;
const patrimonioMeta = projecao.patrimonioMeta;
const limiteAnos = (projecao.anosAteMeta ?? 30) + 15;

const metaAtingida = patrimonioMeta === null ? null : patrimonio.find(elemento => elemento >= patrimonioMeta);

const metaFixa = patrimonioMeta === null ? [] : patrimonio
.map((v, i) => ({ x: i, y: patrimonioMeta }))
.filter(ponto => ponto.x <= limiteAnos);

const ctx = document.querySelector('canvas');
console.log(ctx);

new Chart(ctx, {
    type: 'line',
    data: {

        datasets: [{
            data: patrimonio.map((v, i) => ({ x: i, y: v })), 
            fill: true,
            borderWidth: 2,
            borderColor: '#1D5B78',
            tension: 0.4,
            pointBackgroundColor: '#F0A33B',
            pointBorderColor: '#ffffff',
            pointRadius: context => {
                const i = context.dataIndex;
                const valor = context.dataset.data[i];

                if (!valor) return 0;

                return valor.y === metaAtingida ? 6 : 0;
            },
            pointHoverRadius: context => {
                const i = context.dataIndex;
                const valor = context.dataset.data[i];

                if (!valor) return 0;

                return valor.y === metaAtingida ? 8 : 0;
            }
        },
        {
            label: 'Meta Fixa',
            data: metaFixa, 
            borderColor: '#F0A33B',
            borderDash: [3, 4],
            fill: false,
            pointRadius: 0
        }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                },
                type: 'linear',
                min: 0,
                max: Math.floor(limiteAnos / 5) * 5,
                ticks: {
                    stepSize: 5,
                    callback: v => v === 0 ? 'Hoje' : `${v} anos`
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: value => {
                        return value.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                            maximumFractionDigits: 0
                        });
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: context => {
                        const valor = context.raw;
                        return `Patrimônio: ${valor.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}`;
                    }
                }
            }
        }
    }
});