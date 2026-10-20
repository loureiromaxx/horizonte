const CHAVE_PLANO = "horizonte_plano";

const PLANO_PADRAO = {
  nome: "Marina",
  idade: 22,
  patrimonioAtual: 8000,
  aporteMensal: 1200,
  metaRenda: 5000,
  rendimentoAnual: 10,
  anoChegada: 2057,
  idadeChegada: 53
};

export function carregarPlano(){
    const dados_salvo = localStorage.getItem(CHAVE_PLANO);
    if (!dados_salvo){
        return PLANO_PADRAO;
    }

    try{
        return { ...PLANO_PADRAO, ...JSON.parse(dados_salvo) };
    }catch(e){
        console.error("Erro ao carregar os dados do LocalStorage: ", e);
        return PLANO_PADRAO;
    }
}

export function salvarPlano(dados){
    localStorage.setItem(CHAVE_PLANO, JSON.stringify(dados));
}