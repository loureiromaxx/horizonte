function salvar() {
    const dados = {
        idadeInput: document.querySelector('#idade'),
        patrimonioInput: document.querySelector('#patrimonio-atual'),
        rendaInput: document.querySelector('#renda-mensal'),
        inflacaoInput: document.querySelector('#inflacao')
    }
    
    const erros = validarDados(dados);
    exibirMsgErro(erros, dados);

    if (Object.keys(erros).length !== 0) {
        return
    }
}

function validarDados({idadeInput, patrimonioInput, rendaInput, inflacaoInput}) {
    const erros = {};
    const idade = idadeInput.value;
    const patrimonio = patrimonioInput.value;
    const renda = rendaInput.value;
    const inflacao = inflacaoInput.value;

    if (idade === '' || Number.isNaN(Number(idade))) {
        erros.idade = 'Insira sua idade.';
    } else if (!(Number.isInteger(Number(idade)))) {
        erros.idade = 'Insira uma idade inteira.';
    } else if (Number(idade) < 16 || Number(idade) > 120) {
        erros.idade = 'Insira uma idade entre 16 e 120 anos.';
    }

    if (patrimonio === '' || Number.isNaN(Number(patrimonio))) {
        erros.patrimonio = 'Insira o seu patrimônio atual.';
    } else if (Number(patrimonio) < 0) {
        erros.patrimonio = 'Insira um patrimônio positivo.';
    }

    if (renda === '' || Number.isNaN(Number(renda))) {
        erros.renda = 'Insira a renda mensal desejada.';
    } else if ( Number(renda) <= 0) {
        erros.renda = 'Insira uma renda mensal positiva.';
    }

    if (inflacao === '' || Number.isNaN(Number(inflacao))) {
        erros.inflacao = 'Insira a inflação anual.';
    }

    return erros;
}

function exibirErro(input, mensagem, posicao = 'append') {
    const label = document.querySelector(`label[for="${input.id}"]`);
    let erro = label.querySelector('.mensagem-erro');

    if (!erro) {
        erro = document.createElement('small');
        erro.setAttribute('class', 'mensagem-erro block mt-1 text-xs font-medium text-red-600');

        if (posicao === 'before') {
            const detalhe = label.querySelector('small');
            label.insertBefore(erro, detalhe);
        } else {
            label.appendChild(erro);
        }
    }

    erro.textContent = mensagem;
}

function limparErro(input) {
    const label = document.querySelector(`label[for="${input.id}"]`);
    const erro = label.querySelector('.mensagem-erro');

    if (erro) {
        erro.remove();
    }
}

function exibirMsgErro(erros, dados) {
    if ('idade' in erros) {
        exibirErro(dados.idadeInput, erros.idade);
    } else {
        limparErro(dados.idadeInput);
    }

    if ('patrimonio' in erros) {
        exibirErro(dados.patrimonioInput, erros.patrimonio);
    } else {
        limparErro(dados.patrimonioInput);
    }

    if ('renda' in erros) {
        exibirErro(dados.rendaInput, erros.renda);
    } else {
        limparErro(dados.rendaInput);
    }

    if ('inflacao' in erros) {
        exibirErro(dados.inflacaoInput, erros.inflacao, 'before');
    } else {
        limparErro(dados.inflacaoInput);
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    salvar();
});