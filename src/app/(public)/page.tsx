import Button from "./Button";

export default function Home() {
  return (
    <div>
      <section id="inicio" className="pb-14 pt-12 text-center md:pt-20 scroll-mt-10">
        <h1 className="mx-auto max-w-225 font-display text-[40px] font-bold leading-[1.03] tracking-tight sm:text-6xl md:text-[76px] md:leading-none">
        Viver de renda, <em className="not-italic text-sun-dark">meta por meta.</em>
        </h1>
      <p className="mx-auto mb-9 mt-6 max-w-175 text-lg text-mut md:text-[21px] md:leading-7">
        Simule em quantos anos você pode viver de renda. Crie suas próprias metas e veja quanto guardar por mês para chegar a tempo em cada uma.
      </p>
      <Button />
      <p className="mt-5 text-sm text-mut">Monte seu plano em cerca de dois minutos</p>
    </section>

    <div className="mx-auto grid max-w-260 items-start gap-6 text-left lg:grid-cols-[1.6fr_1fr]" role="group" aria-label="Exemplo do Horizonte, com dados fictícios">
      <div className="min-w-0 rounded-[20px] border border-line bg-white p-6 shadow-[0_24px_48px_-28px_rgba(19,63,85,0.28)] sm:px-7">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-mut">Simulador · Seu plano</p>
        <h2 className="mb-3.5 mt-1 font-display text-[26px] font-bold tracking-tight sm:text-[28px]">Chegada prevista: dez/2057 <span className="ml-1 font-sans text-[17px] font-semibold text-mut">em 31 anos</span></h2>
        
        <svg className="block h-auto w-full" viewBox="0 0 640 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exemplo de evolução do patrimônio até a meta, em valores de hoje">
          <line x1="76" x2="610" y1="252" y2="252" stroke="#D6DFE3"/>
          <text x="66" y="256" textAnchor="end" fontSize="11" fill="#5B6E77">R$ 0</text>
          <line x1="76" x2="610" y1="173" y2="173" stroke="#D6DFE3"/>
          <text x="66" y="177" textAnchor="end" fontSize="11" fill="#5B6E77">R$ 1 mi</text>
          <line x1="76" x2="610" y1="95" y2="95" stroke="#D6DFE3"/>
          <text x="66" y="99" textAnchor="end" fontSize="11" fill="#5B6E77">R$ 2 mi</text>
          <text x="76" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">Hoje</text>
          <text x="135" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">5 anos</text>
          <text x="195" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">10 anos</text>
          <text x="254" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">15 anos</text>
          <text x="313" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">20 anos</text>
          <text x="373" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">25 anos</text>
          <text x="432" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">30 anos</text>
          <text x="491" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">35 anos</text>
          <text x="551" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">40 anos</text>
          <text x="610" y="292" textAnchor="middle" fontSize="11" fill="#5B6E77">45 anos</text>
          <line x1="76" x2="610" y1="162" y2="162" stroke="#F0A33B" strokeWidth="2" strokeDasharray="7 5"/>
          <text x="84" y="154" fontSize="12" fontWeight="700" fill="#B87410">Meta: R$ 1,14 mi</text>
          <clipPath id="c640"><rect x="76" y="16" width="534" height="252"/></clipPath>
          <g clipPath="url(#c640)">
            <path d="M76 252 Q250 240 440 162 T610 16" fill="#1D5B78" fillOpacity="0.10"/>
            <path d="M76 252 Q250 240 440 162 T610 16" fill="none" stroke="#1D5B78" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="446" cy="162" r="15" fill="#F0A33B" fillOpacity="0.25"/>
            <circle cx="446" cy="162" r="8" fill="#F0A33B" stroke="#fff" strokeWidth="2.5"/>
          </g>
        </svg>
      </div>

      <div className="grid min-w-0 gap-6 lg:mt-11">
        <div className="rounded-[20px] border border-line bg-white p-6 shadow-[0_24px_48px_-28px_rgba(19,63,85,0.28)] sm:px-7">
          <p className="mb-3.5 text-xs font-bold uppercase tracking-[0.14em] text-mut">Próximas metas</p>
          <div className="mb-5"><div className="flex justify-between gap-3 text-[15px]"><b>Reserva de emergência</b><span className="whitespace-nowrap text-mut">abr/2027</span></div><div className="my-2 h-2.5 rounded-full bg-sea-soft"><div className="h-full rounded-full bg-sun w-[53%]"></div></div><small className="text-[13px] text-mut">R$ 8.000 de R$ 15.000</small></div>
          <div className="mb-5"><div className="flex justify-between gap-3 text-[15px]"><b>Primeiros R$ 50 mil</b><span className="whitespace-nowrap text-mut">jun/2029</span></div><div className="my-2 h-2.5 rounded-full bg-sea-soft"><div className="h-full rounded-full bg-sun w-[16%]"></div></div><small className="text-[13px] text-mut">R$ 8.000 de R$ 50.000</small></div>
        </div>
      </div>

      <div className="w-full max-w-115 justify-self-center rounded-[20px] border border-line bg-white p-6 shadow-[0_24px_48px_-28px_rgba(19,63,85,0.28)] sm:px-7 lg:col-span-2">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-mut">Nova meta</p>
        <div className="my-3.5 grid grid-cols-2 gap-2.5 text-left">
          <div><span className="mb-1 block text-[11px] text-mut">Nome</span><div className="rounded-lg border-[1.5px] border-line bg-white px-2.5 py-2 text-sm font-bold">Intercâmbio</div></div>
          <div><span className="mb-1 block text-[11px] text-mut">Valor</span><div className="rounded-lg border-[1.5px] border-line bg-white px-2.5 py-2 text-sm font-bold">R$ 40.000</div></div>
          <div><span className="mb-1 block text-[11px] text-mut">Data desejada</span><div className="rounded-lg border-[1.5px] border-line bg-white px-2.5 py-2 text-sm font-bold">dez/2028</div></div>
          <div><span className="mb-1 block text-[11px] text-mut">Já tenho para essa meta</span><div className="rounded-lg border-[1.5px] border-line bg-white px-2.5 py-2 text-sm font-bold">R$ 3.000</div></div>
        </div>
        <div className="rounded-l-sm rounded-r-[10px] border-l-4 border-sun bg-sun-soft px-3.5 py-3 text-sm">Guarde cerca de <b>R$ 1.335 por mês</b>, além do seu aporte, para chegar a tempo.</div>
      </div>
    </div>
    <p className="mt-5 text-center text-[13px] text-mut">Exemplo com dados fictícios</p>

    <section id="como-funciona" className="mt-8 py-16 scroll-mt-10">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Como funciona</h2>
        <p className="mt-2 text-lg text-mut">Três passos do objetivo até a conquista</p>
      </div>
      <div className="grid gap-10 text-center md:grid-cols-3">
        <div>
          <svg className="mx-auto mb-4" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#13242C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
          <h3 className="mb-2 font-display text-xl font-bold tracking-tight">Conte seu objetivo</h3>
          <p className="mx-auto max-w-[320px] text-mut">Quanto você quer receber por mês, sua idade, o que já tem, quanto consegue guardar e quanto seu dinheiro rende.</p>
        </div>
        <div>
          <svg className="mx-auto mb-4" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#13242C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          <h3 className="mb-2 font-display text-xl font-bold tracking-tight">Veja o caminho</h3>
          <p className="mx-auto max-w-[320px] text-mut">O simulador mostra a evolução do seu patrimônio e em que ano você chega à independência financeira.</p>
        </div>
        <div>
          <svg className="mx-auto mb-4" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#13242C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
          <h3 className="mb-2 font-display text-xl font-bold tracking-tight">Conquiste meta por meta</h3>
          <p className="mx-auto max-w-[320px] text-mut">Divida a jornada em marcos e crie metas pessoais, cada uma com progresso e data.</p>
        </div>
      </div>
    </section>

    <section id="recursos" className="py-16 scroll-mt-10">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">Duas ferramentas, um plano</h2>
        <p className="mt-2 text-lg text-mut">O simulador mostra o destino. As metas organizam o caminho.</p>
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        <div className="flex min-w-0 flex-col rounded-[22px] border border-line bg-white p-6 sm:p-8">
          <h3 className="mb-1.5 font-display text-[28px] font-bold tracking-tight">Simulador</h3>
          <p className="mb-5 text-mut">Descubra em quantos anos você pode viver de renda.</p>
          <div className="mb-5 rounded-[14px] border border-line bg-paper-dark p-4">
            
            {/* Chart 2 Placeholder */}
            <svg className="block h-auto w-full" viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exemplo com duas linhas: o plano atual e a sua simulação com aporte maior">
              <line x1="76" x2="430" y1="192" y2="192" stroke="#D6DFE3"/>
              <text x="66" y="196" textAnchor="end" fontSize="11" fill="#5B6E77">R$ 0</text>
              <line x1="76" x2="430" y1="133" y2="133" stroke="#D6DFE3"/>
              <text x="66" y="137" textAnchor="end" fontSize="11" fill="#5B6E77">R$ 500 mil</text>
              <line x1="76" x2="430" y1="75" y2="75" stroke="#D6DFE3"/>
              <text x="66" y="79" textAnchor="end" fontSize="11" fill="#5B6E77">R$ 1 mi</text>
              <line x1="76" x2="430" y1="16" y2="16" stroke="#D6DFE3"/>
              <text x="66" y="20" textAnchor="end" fontSize="11" fill="#5B6E77">R$ 1,5 mi</text>
              <text x="76" y="232" textAnchor="middle" fontSize="11" fill="#5B6E77">Hoje</text>
              <text x="165" y="232" textAnchor="middle" fontSize="11" fill="#5B6E77">10 anos</text>
              <text x="253" y="232" textAnchor="middle" fontSize="11" fill="#5B6E77">20 anos</text>
              <text x="342" y="232" textAnchor="middle" fontSize="11" fill="#5B6E77">30 anos</text>
              <text x="430" y="232" textAnchor="middle" fontSize="11" fill="#5B6E77">40 anos</text>
              <line x1="76" x2="430" y1="58" y2="58" stroke="#F0A33B" strokeWidth="2" strokeDasharray="7 5"/>
              <text x="84" y="50" fontSize="12" fontWeight="700" fill="#B87410">Meta: R$ 1,14 mi</text>
              <clipPath id="c460"><rect x="76" y="16" width="354" height="176"/></clipPath>
              <g clipPath="url(#c460)">
                <path d="M76 192 Q200 180 345 58 T430 -30" fill="none" stroke="#1D5B78" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="352" cy="58" r="15" fill="#F0A33B" fillOpacity="0.25"/>
                <circle cx="352" cy="58" r="8" fill="#F0A33B" stroke="#fff" strokeWidth="2.5"/>
                <path d="M76 192 Q180 170 295 58 T430 -70" fill="none" stroke="#2B8A68" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 5"/>
                <circle cx="298" cy="58" r="15" fill="#F0A33B" fillOpacity="0.25"/>
                <circle cx="298" cy="58" r="8" fill="#F0A33B" stroke="#fff" strokeWidth="2.5"/>
              </g>
            </svg>

            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-mut">
              <span><i className="mr-1.5 inline-block h-1 w-3 rounded-sm bg-sea align-middle"></i>Plano atual (R$ 1.200 por mês)</span>
              <span><i className="mr-1.5 inline-block h-1 w-3 rounded-sm bg-[#2B8A68] align-middle"></i>Sua simulação (R$ 1.800 por mês)</span>
            </div>
          </div>
          <ul className="grid gap-3">
            <li className="flex items-start gap-3 text-[17px]"><svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B8A68" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg><span>Gráfico de evolução do patrimônio até a sua meta</span></li>
            <li className="flex items-start gap-3 text-[17px]"><svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B8A68" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg><span>Compare o plano atual com a sua simulação no mesmo gráfico</span></li>
            <li className="flex items-start gap-3 text-[17px]"><svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B8A68" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg><span>Valores sempre em poder de compra de hoje</span></li>
          </ul>
        </div>
        <div className="flex min-w-0 flex-col rounded-[22px] border border-line bg-white p-6 sm:p-8">
          <h3 className="mb-1.5 font-display text-[28px] font-bold tracking-tight">Metas</h3>
          <p className="mb-5 text-mut">Crie marcos e objetivos pessoais e acompanhe cada um.</p>
          <div className="mb-5 rounded-[14px] border border-line bg-paper-dark p-4">
            <div className="mb-5"><div className="flex justify-between gap-3 text-[15px]"><b>Reserva de emergência</b><span className="whitespace-nowrap text-mut">abr/2027</span></div><div className="my-2 h-2.5 rounded-full bg-sea-soft"><div className="h-full rounded-full bg-sun w-[53%]"></div></div><small className="text-[13px] text-mut">R$ 8.000 de R$ 15.000</small></div>
            <div className="mb-5"><div className="flex justify-between gap-3 text-[15px]"><b>Primeiros R$ 50 mil</b><span className="whitespace-nowrap text-mut">jun/2029</span></div><div className="my-2 h-2.5 rounded-full bg-sea-soft"><div className="h-full rounded-full bg-sun w-[16%]"></div></div><small className="text-[13px] text-mut">R$ 8.000 de R$ 50.000</small></div>
            <div className="mb-5"><div className="flex justify-between gap-3 text-[15px]"><b>Intercâmbio</b><span className="whitespace-nowrap text-mut">até dez/2028</span></div><div className="my-2 h-2.5 rounded-full bg-sea-soft"><div className="h-full rounded-full bg-sun w-[8%]"></div></div><small className="text-[13px] text-mut">R$ 3.000 de R$ 40.000</small></div>
          </div>
          <ul className="grid gap-3">
            <li className="flex items-start gap-3 text-[17px]"><svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B8A68" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg><span>Marcos como reserva de emergência e primeiros R$ 50 mil</span></li>
            <li className="flex items-start gap-3 text-[17px]"><svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B8A68" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg><span>Barra de progresso e data estimada para cada meta</span></li>
            <li className="flex items-start gap-3 text-[17px]"><svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B8A68" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg><span>Metas próprias, como um intercâmbio, com valor e data desejada</span></li>
            <li className="flex items-start gap-3 text-[17px]"><svg className="mt-1 shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2B8A68" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg><span>Cálculo de quanto guardar por mês para chegar a tempo</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section className="py-24 text-center">
      <h2 className="font-display text-3xl font-bold tracking-tight md:text-[52px] md:leading-13">Pronto para traçar o seu horizonte?</h2>
      <p className="mb-8 mt-2.5 text-[19px] text-mut">Entre com sua conta ou crie uma nova em poucos minutos.</p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <Button />
      </div>
    </section>
    </div>
  );
}
