export function calcularRentabilidadeRealAnual(rendimentoAnual, inflacaoAnual) {

  const rendimento = rendimentoAnual > 1 ? rendimentoAnual / 100 : rendimentoAnual;
  const inflacao = inflacaoAnual > 1 ? inflacaoAnual / 100 : inflacaoAnual;

  return ((1 + rendimento) / (1 + inflacao)) - 1;
}

export function calcularRentabilidadeRealMensal(rentabilidadeRealAnual) {
  return Math.pow(1 + rentabilidadeRealAnual, 1 / 12) - 1;
}

export function calcularPatrimonioMeta(rendaMensal, rentabilidadeRealAnual) {
  
  if (rentabilidadeRealAnual <= 0) return 0;
  return (rendaMensal * 12) / rentabilidadeRealAnual;
}

export function calcularProximoMes(patrimonioAtual, aporteMensal, rentabilidadeMensal) {
  return Math.round(patrimonioAtual * (1 + rentabilidadeMensal) + aporteMensal);
}

export function simularAteMeta(patrimonioInicial, aporteMensal, rentabilidadeMensal, patrimonioMeta, idadeAtual) {
  
  let patrimonio = patrimonioInicial;
  let meses = 0;
  const LIMITE_MAXIMO_MESES = 1200;

  while (patrimonio < patrimonioMeta && meses < LIMITE_MAXIMO_MESES) {
    patrimonio = calcularProximoMes(patrimonio, aporteMensal, rentabilidadeMensal);
    meses++;
  }

  if (patrimonio < patrimonioMeta) {
    return {
      atingiuMeta: false,
      mesesAteMeta: null,
      anosAteMeta: null,
      idadeNaMeta: null,
      totalAportado: null,
    };
  }

  const anosAteMeta = Math.ceil(meses / 12);

  const idadeNaMeta = idadeAtual + anosAteMeta;

  const totalAportado = aporteMensal * meses;

  return {
    atingiuMeta: true,
    mesesAteMeta: meses,
    anosAteMeta,
    idadeNaMeta,
    totalAportado,
  };
}

export function calcularPatrimonio(patrimonioInicial, aporteMensal, rentabilidadeMensal, anos) {
  let patrimonioAtual = patrimonioInicial;
  const patrimonio5Anos = [patrimonioAtual];
  const meses = anos * 12;


  for (let mes = 1; mes <= meses; mes++) {
    patrimonioAtual = calcularProximoMes(patrimonioAtual, aporteMensal, rentabilidadeMensal);
    if (mes % 12 === 0) {
      patrimonio5Anos.push(patrimonioAtual);
    }
  }

  return patrimonio5Anos;
}

export function calcularAporte25Anos(patrimonioMeta, patrimonioAtual, rentabilidadeMensal) {
  
  const fator300 = Math.pow(1 + rentabilidadeMensal, 300);

  if (patrimonioAtual * fator300 >= patrimonioMeta) {
    return 0;
  }

  if (rentabilidadeMensal === 0) {
    return Math.round((patrimonioMeta - patrimonioAtual) / 300);
  }

  const numerador = (patrimonioMeta - patrimonioAtual * fator300) * rentabilidadeMensal;
  const denominador = fator300 - 1;

  return Math.round(numerador / denominador);
}

export function calcularPlanoCompleto(dados) {
  
  const renda = Number(dados.renda || 5000);
  const idade = Number(dados.idade || 22);
  const patrimonio = Number(dados.patrimonio || 8000);
  const aporte = Number(dados.aporte || 1200);
  const rendimento = Number(dados.rendimento || 10);
  const inflacao = Number(dados.inflacao || 4.5);

  const rentabilidadeRealAnual = calcularRentabilidadeRealAnual(rendimento, inflacao);
  const rentabilidadeRealMensal = calcularRentabilidadeRealMensal(rentabilidadeRealAnual);
  const patrimonioMeta = calcularPatrimonioMeta(renda, rentabilidadeRealAnual);

  const simulacao = simularAteMeta(patrimonio, aporte, rentabilidadeRealMensal, patrimonioMeta, idade);

  const anoAtual = new Date().getFullYear();
  const anoChegada = simulacao.anosAteMeta ? anoAtual + simulacao.anosAteMeta : null;
  const anosAteMeta = simulacao.anosAteMeta;

   const patrimonio5Anos = calcularPatrimonio(patrimonio, aporte, rentabilidadeRealMensal, anosAteMeta + 15);

  return {
    rentabilidadeRealAnual,
    rentabilidadeRealMensal,
    patrimonioMeta: Math.round(patrimonioMeta),
    mesesAteMeta: simulacao.mesesAteMeta,
    anosAteMeta,
    idadeNaMeta: simulacao.idadeNaMeta,
    anoChegada,
    totalAportado: simulacao.totalAportado,
    patrimonio5Anos
  };
}
