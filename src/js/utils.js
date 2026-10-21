export const CHAVES = {
  PLANO: 'horizonte:plano',
  RASCUNHO_ONBOARDING: 'horizonte:onboarding:rascunho',
};

export function el(tag, atributos = {}, ...filhos) {
  const elemento = document.createElement(tag);
  
  Object.entries(atributos).forEach(([nome, valor]) => {
    if (valor === undefined || valor === null || valor === false) return;
    
    if (nome === 'class') elemento.className = valor;
    else if (nome === 'text') elemento.textContent = valor;
    else if (nome.startsWith('on') && typeof valor === 'function') {
      elemento.addEventListener(nome.slice(2).toLowerCase(), valor);
    } else {
      elemento.setAttribute(nome, valor === true ? '' : valor);
    }
  });
  
  filhos.flat().forEach((filho) => {
    if (filho !== undefined && filho !== null && filho !== false) elemento.append(filho);
  });
  
  return elemento;
}

export const storage = {
  ler(chave, padrao = null) {
    try {
      const bruto = localStorage.getItem(chave);
      return bruto === null ? padrao : JSON.parse(bruto);
    } catch {
      return padrao;
    }
  },
  salvar(chave, valor) {
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
      return true;
    } catch {
      return false;
    }
  },
  remover(chave) {
    try {
      localStorage.removeItem(chave);
      return true;
    } catch {
      return false;
    }
  },
};