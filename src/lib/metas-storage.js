const CHAVE = "metas";

export function listarMetas() {
  const texto = localStorage.getItem(CHAVE);
  return texto ? JSON.parse(texto) : [];
}

function salvarMetas(metas) {
  localStorage.setItem(CHAVE, JSON.stringify(metas));
}

export function criarMeta(dados) {
  const nova = { id: crypto.randomUUID(), ...dados };
  salvarMetas([...listarMetas(), nova]);
  return nova;
}

export function buscarMeta(id) {
  return listarMetas().find((meta) => meta.id === id);
}

export function atualizarMeta(id, dados) {
  const metas = listarMetas().map((meta) =>
    meta.id === id ? { ...meta, ...dados } : meta
  );
  salvarMetas(metas);
}

export function excluirMeta(id) {
  const metas = listarMetas().filter((meta) => meta.id !== id);
  salvarMetas(metas);
}

export function obterSaldoTotalMetas() {
  const metas = listarMetas();
  return metas.reduce((total, meta) => total + (Number(meta.valorAtual) || 0), 0);
}