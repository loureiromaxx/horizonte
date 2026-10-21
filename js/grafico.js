import Chart from 'chart.js/auto';

const patrimonio = [8000, 10500, 15500, 25500, 50000, 100000, 150000, 300000, 500000, 1000000];
const patrimonioMeta = 100000;
const labels = ['Hoje', '5 anos', '10 anos', '15 anos', '20 anos', '25 anos', '30 anos', '35 anos', '40 anos', '45 anos'];

const metaAtingida = patrimonio.find(elemento => elemento >= patrimonioMeta);
const metaFixa = patrimonio.map(() => patrimonioMeta);


const ctx = document.querySelector('canvas');
console.log(ctx);

new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            data: patrimonio,
            fill: true,
            borderWidth: 2,
            borderColor: '#1D5B78',
            tension: 0.4,
            pointBackgroundColor: '#F0A33B',
            pointBorderColor: '#ffffff',
            pointRadius: context => {
                const index = context.dataIndex;
                const value = context.dataset.data[index];
                return value === metaAtingida ? 6 : 0;
            },
            pointHoverRadius: context => {
                const index = context.dataIndex;
                const value = context.dataset.data[index];
                return value === metaAtingida ? 8 : 0
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