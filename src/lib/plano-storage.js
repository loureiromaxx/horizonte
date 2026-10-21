const CHAVE_PLANO = "horizonte:plano";

const PLANO_PADRAO = {
  renda: 5000,
  idade: 22,
  patrimonio: 8000,
  aporte: 1200,
  rendimento: 10,
  inflacao: 4.5,
  anoChegada: 2057,
  idadeChegada: 53
};

export function carregarPlano() {
  const dados_salvo = localStorage.getItem(CHAVE_PLANO);
  if (!dados_salvo) {
    return PLANO_PADRAO;
  }

  try {
    return { ...PLANO_PADRAO, ...JSON.parse(dados_salvo) };
  } catch (e) {
    console.error("Erro ao carregar os dados do LocalStorage: ", e);
    return PLANO_PADRAO;
  }
}

export function salvarPlano(dados) {
  localStorage.setItem(CHAVE_PLANO, JSON.stringify(dados));
}
