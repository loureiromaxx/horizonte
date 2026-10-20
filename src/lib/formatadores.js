export function formatarMoeda(valor) {
  return Number(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

export function formatarPrevisao(dataStr) {
  if (!dataStr) return "";

  const [ano, mes] = dataStr.split("-");
  const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  const nomeMes = meses[Number(mes) - 1] || mes;
  
  return `Previsão: ${nomeMes}/${ano}`;
}