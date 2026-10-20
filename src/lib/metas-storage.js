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