# Horizonte - Simulador de Independência Financeira

> Sistema Web que transforma a meta de viver de renda num plano visual e acompanhável, calculando prazos, aportes mensais e evolução patrimonial.

## Ideia, Objetivo Principal & Público-Alvo
- **Ideia & Objetivo:** Transformar uma meta de vida (como receber um determinado valor mensal de renda) num plano visual, indicando a data de alcance e o valor mensal necessário para guardar, em vez de apresentar apenas um número isolado.
- **Público-Alvo:** Jovens e estudantes universitários que estão começando a investir e desejam compreender o próprio plano financeiro sem muitos termos técnicos.
- **Problema:** As pessoas acabam recorrendo a planilhas manuais ou calculadoras que fornecem um valor solto, sem mostrar o caminho prático até a meta.
- **Solução & Valor:** Uma interface web simples e intuitiva onde o usuário introduz poucos dados e visualiza a evolução num gráfico em tempo real, acompanhando marcos do plano e suas metas próprias.

## Benchmarking (Análise Comparativa)
| Ferramenta | Pontos Fortes | Limitações | Diferencial da Solução |
| ---------- | ------------- | ---------- | ---------------------- |
| Simulador Viver de Renda | Considera a inflação e período de consumo | Apenas apresenta um texto final sem metas intermediárias | Gráficos visuais e definição do ano de chegada e valor mensal a guardar |
| AmortizaPro | Usa a regra dos 4% de retirada segura | Foco exclusivo no patrimônio total e tempo de chegada, sem metas | Acompanha as metas próprias com prazos definidos |
| Kinvo / Status Invest | Análise profunda de ativos e acompanhamento de carteira | Voltado para quem já investe; complexo para iniciantes | Simplicidade, foco no usuário iniciante e na projeção do plano |

## Equipe
- **Ana Beatriz Paulino** - 20252380022 | [GitHub](https://github.com/anabeatriz353)
- **João Neto** - 202614320006 | [GitHub](https://github.com/joaoneto1404)
- **Jonathan Nascimento** - 20252380004 | [GitHub](https://github.com/johnlcsz)
- **Luis Guimaraes** - 202614320002 | [GitHub](https://github.com/luis2346)
- **Max Loureiro** - 202614320022 | [GitHub](https://github.com/loureiromaxx)

## Documentação & Recursos
- **Pitch / Apresentação:** [Google Slides](https://docs.google.com/presentation/d/1-YdgnxVtgF_t_3ORMciu-RFWWeUfjPpQU3EvwJkvByY/edit?usp=sharing)
- **Protótipos / Design:** [Figma](https://www.figma.com/design/dU7gBU8CStjYauZyXW1dEI/Horizonte?m=auto&t=4yZOlAWsw8TYz8TP-6)
- **Workflow / Kanban:** [GitHub Projects](https://github.com/users/loureiromaxx/projects/1/views/1)

## Páginas / Telas da Aplicação (GitHub Pages)
- 🏠 **Página Inicial:** [https://loureiromaxx.github.io/horizonte/](https://loureiromaxx.github.io/horizonte/)
- 🔑 **Autenticação (Login/Cadastro):** [https://loureiromaxx.github.io/horizonte/login.html](https://loureiromaxx.github.io/horizonte/login.html)
- 🚀 **Onboarding:** [https://loureiromaxx.github.io/horizonte/onboarding-1.html](https://loureiromaxx.github.io/horizonte/onboarding-1.html)
- 📊 **Dashboard:** [https://loureiromaxx.github.io/horizonte/dashboard.html](https://loureiromaxx.github.io/horizonte/dashboard.html)
- 📈 **Simulador:** [https://loureiromaxx.github.io/horizonte/simulador.html](https://loureiromaxx.github.io/horizonte/simulador.html)
- 🎯 **Metas:** [https://loureiromaxx.github.io/horizonte/metas.html](https://loureiromaxx.github.io/horizonte/metas.html)

## Funcionalidades Planejadas (Features)
- [x] Onboarding interativo de 5 passos, com uma pergunta por tela.
- [x] Dashboard central com indicadores do plano, gráfico até a meta e próximas metas.
- [x] Simulador interativo com controles de aporte, rendimento e prazo que alteram o gráfico em tempo real.
- [x] Gestão de marcos do plano e criação de metas próprias (ex: Intercâmbio) com cálculo de aporte mensal.
- [ ] Armazenamento local com JavaScript puro via LocalStorage ou API simulada (`json-server`).
- [ ] Autenticação de usuários e implementação de banco de dados PostgreSQL via Supabase.
- [ ] Interface desenvolvida com Next.js.

## Estratégia para Obtenção de Dados Reais (Hipóteses Técnicas)

**Fontes de Dados & Coleta:**
- Informações fornecidas pelo usuário para a realização dos cálculos financeiros;
- Cálculos financeiros realizados no próprio navegador utilizando JavaScript;
- Inflação obtida futuramente pela API aberta do Banco Central, utilizando o IPCA.

**Armazenamento & API:**
- LocalStorage ou API simulada para guardar temporariamente os dados do usuário;
- Banco de dados PostgreSQL através do Supabase para armazenar usuários, planos financeiros e metas;
- Acesso seguro e individualizado aos dados salvos por cada pessoa.
