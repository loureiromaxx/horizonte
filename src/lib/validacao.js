export function validarMeta({ nome, valorMeta, valorAtual, dataDesejada }) {
  const erros = {};

  if (!nome.trim()) {
    erros.nome = "Informe o nome da meta.";
  }

  if (!(valorMeta > 0)) {
    erros.valorMeta = "Informe um valor maior que zero.";
  }

  if (valorAtual < 0) {
    erros.valorAtual = "O valor não pode ser negativo.";
  } else if (valorAtual > valorMeta) {
    erros.valorAtual = "Não pode ser maior que o valor da meta.";
  }

  if (!dataDesejada) {
    erros.dataDesejada = "Escolha a data desejada.";
  } else {
    const hoje = new Date();
    const mesAtual = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;
    if (dataDesejada < mesAtual) {
      erros.dataDesejada = "Escolha o mês atual ou um mês futuro.";
    }
  }

  return erros;
}