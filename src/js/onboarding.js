import { el, storage, CHAVES } from './utils.js';

const PASSOS = [
  { id: 'renda', rotulo: 'Objetivo', titulo: 'Quanto você quer receber por mês quando viver de renda?', dica: 'Pense no valor necessário para cobrir seus custos e manter seu padrão de vida.', prefixo: 'R$', placeholder: '5000', sufixo: 'por mês' },
  { id: 'idade', rotulo: 'Idade', titulo: 'Quantos anos você tem?', dica: 'Usamos a idade só para calcular com quantos anos você chega à independência financeira.', prefixo: '', placeholder: '20', sufixo: 'anos' },
  { id: 'patrimonio', rotulo: 'Patrimônio atual', titulo: 'Quanto você já tem guardado ou investido?', dica: 'Se ainda não tem nada guardado, pode começar com zero.', prefixo: 'R$', placeholder: '8000', sufixo: '' },
  { id: 'aporte', rotulo: 'Aporte mensal', titulo: 'Quanto você consegue guardar por mês?', dica: 'Você pode ajustar esse valor depois, a qualquer momento, no simulador.', prefixo: 'R$', placeholder: '1200', sufixo: 'por mês' },
  { id: 'rendimento', rotulo: 'Rendimento', titulo: 'Quanto o seu dinheiro rende por ano?', dica: 'A taxa média anual de juros esperada para os seus investimentos.', prefixo: '', placeholder: '10', sufixo: '% ao ano' }
];

const INFLACAO_PADRAO = 4.5;
let passoAtual = 0;
const rascunho = storage.ler(CHAVES.RASCUNHO_ONBOARDING);

// Aproveita do rascunho só o que for texto; o resto começa vazio
let respostas = PASSOS.reduce(
  (acc, p) => ({ ...acc, [p.id]: typeof rascunho?.[p.id] === 'string' ? rascunho[p.id] : '' }),
  {},
);

const areaStepper = document.getElementById('area-stepper');
const areaPainel = document.getElementById('area-painel');

function render() {
  const itensMenu = PASSOS.map((passo, index) => {
    const isAtual = index === passoAtual;
    const isConcluido = index < passoAtual;
    
    return el('div', { class: `flex items-center gap-3.5 py-3.5 ${isAtual ? 'text-ink font-bold' : isConcluido ? 'text-sea font-bold' : 'text-mut'}` },
      el('span', { class: `w-[30px] h-[30px] rounded-full flex items-center justify-center text-sm border-[1.5px] ${isAtual ? 'bg-sea-dark text-white border-sea-dark' : isConcluido ? 'bg-seas text-sea border-sea' : 'bg-white text-mut border-line'}` }, 
        isConcluido ? '✓' : String(index + 1)
      ),
      el('span', { text: passo.rotulo })
    );
  });
  
  areaStepper.replaceChildren(el('div', { class: 'flex flex-col gap-1.5 list-none' }, ...itensMenu));

  const p = PASSOS[passoAtual];
  
  // Elementos dinâmicos para a dica e erro
  const dicaEl = el('p', { class: 'text-mut text-sm mt-1 px-1', text: p.dica });
  const erroEl = el('span', { class: 'text-red-500 text-sm font-medium mt-1 hidden px-1' });

  const inputEl = el('input', {
    type: 'number',
    step: 'any', min: '0', inputmode: 'decimal', autocomplete: 'off', 'aria-label': p.titulo,
    class: 'font-display text-[40px] md:text-[56px] font-bold outline-none bg-transparent w-full', placeholder: p.placeholder, value: respostas[p.id],
    onInput: (e) => { 
      respostas[p.id] = e.target.value; 
      storage.salvar(CHAVES.RASCUNHO_ONBOARDING, respostas);
      
      // Limpa o erro e devolve a dica visualmente assim que o utilizador volta a digitar
      erroEl.classList.add('hidden');
      dicaEl.classList.remove('hidden');
      caixaInputEl.classList.replace('border-red-500', 'border-sea');
    }
  });

  const caixaInputEl = el('div', { class: 'flex items-baseline gap-3 bg-white border-2 border-sea rounded-xl p-5 transition-colors' },
    p.prefixo ? el('span', { class: 'text-[26px] text-mut', text: p.prefixo }) : null,
    inputEl,
    p.sufixo ? el('span', { class: 'ml-auto text-mut', text: p.sufixo }) : null
  );

  // Função auxiliar para exibir o erro e esconder a dica
  const dispararErro = (mensagem) => {
    erroEl.textContent = mensagem;
    erroEl.classList.remove('hidden');
    dicaEl.classList.add('hidden');
    caixaInputEl.classList.replace('border-sea', 'border-red-500');
  };

  const formEl = el('form', {
    novalidate: true,
    class: 'flex flex-col gap-5',
    onSubmit: (e) => {
      e.preventDefault();
      const valor = parseFloat(respostas[p.id]);

      // Validação: Campo vazio
      if (!respostas[p.id] || isNaN(valor)) {
        return dispararErro('Por favor, preencha este campo para continuar.');
      }

      // Validação: Valor negativo
      if (valor < 0) {
        return dispararErro('O valor não pode ser negativo.');
      }

      // Validação Específica: Idade mínima e rendimento
      if (p.id === 'idade' && (!Number.isInteger(valor) || valor < 16 || valor > 100)) {
        return dispararErro('Informe uma idade em anos inteiros, entre 16 e 100.');
      }
      if (p.id === 'rendimento' && valor > 100) {
        return dispararErro('Informe um rendimento de até 100% ao ano.');
      }

      // Validação Específica: Património 0 + Aporte 0
      if (p.id === 'aporte' && valor === 0 && parseFloat(respostas['patrimonio']) === 0) {
        return dispararErro('Como você está começando do zero, o aporte precisa ser maior que zero!');
      }

      // Validação: Valor zero (para renda e rendimento)
      if (valor === 0 && (p.id === 'renda' || p.id === 'rendimento')) {
        return dispararErro('O valor precisa ser maior que zero.');
      }
      
      if (passoAtual < PASSOS.length - 1) {
        passoAtual++;
        render();
      } else {
        const plano = {
          renda: Number(respostas.renda),
          idade: Number(respostas.idade),
          patrimonio: Number(respostas.patrimonio),
          aporte: Number(respostas.aporte),
          rendimento: Number(respostas.rendimento),
          inflacao: INFLACAO_PADRAO,
        };
        
        if (!storage.salvar(CHAVES.PLANO, plano)) {
          return dispararErro('Não foi possível salvar o plano neste navegador. Verifique se o armazenamento local está liberado.');
        }
        
        storage.remover(CHAVES.RASCUNHO_ONBOARDING);
        window.location.href = './dashboard.html';
      }
    }
  },
    el('h2', { class: 'font-display text-[42px] leading-[1.1] tracking-[-0.02em]', text: p.titulo }),
    el('div', { class: 'flex flex-col gap-1' }, 
      caixaInputEl,
      dicaEl,
      erroEl
    ),
    el('div', { class: 'flex gap-3.5 mt-2' },
      passoAtual > 0 ? el('button', { type: 'button', class: 'border-[1.5px] border-sea-dark text-sea-dark rounded-full px-7 py-3.5 font-bold hover:bg-seas', text: 'Voltar', onClick: () => { passoAtual--; render(); } }) : null,
      el('button', { type: 'submit', class: 'bg-sea-dark text-white rounded-full px-7 py-3.5 font-bold hover:bg-sea', text: passoAtual === PASSOS.length - 1 ? 'Ver meu plano' : 'Continuar' })
    )
  );

  areaPainel.replaceChildren(formEl);
  setTimeout(() => inputEl.focus(), 50);
}

render();