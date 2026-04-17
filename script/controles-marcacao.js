const todasMarcacoes = document.querySelectorAll('.marcacao');
const inputX = document.getElementById('x-da-marcacao');
const inputY = document.getElementById('y-da-marcacao');
const inputLargura = document.getElementById('largura-da-marcacao');
const inputAltura = document.getElementById('altura-da-marcacao');
const inputTitulo = document.getElementById('titulo-da-marcacao');
const inputConteudo = document.getElementById('conteudo-da-marcacao');
const inputCor = document.getElementById('cor-da-marcacao');
const radiosFormato = document.querySelectorAll('input[name="formato-da-marcacao"]');

let marcacaoSelecionada = document.querySelector('.marcacao.selecionada');

function extrairNumero(valor) {
  if (!valor) return 0;
  return parseInt(valor.replace('px', ''));
}

function preencherControles(marcacao) {
  const estiloComputado = window.getComputedStyle(marcacao);
  
  inputX.value = extrairNumero(marcacao.style.left || estiloComputado.left);
  inputY.value = extrairNumero(marcacao.style.top || estiloComputado.top);
  inputLargura.value = extrairNumero(marcacao.style.width || estiloComputado.width);
  inputAltura.value = extrairNumero(marcacao.style.height || estiloComputado.height);
  
  inputTitulo.value = marcacao.dataset.titulo || '';
  inputConteudo.value = marcacao.dataset.conteudo || '';
  inputCor.value = marcacao.dataset.cor || '#000000';

  if (marcacao.classList.contains('formato-oval')) {
    document.querySelector('input[value="formato-oval"]').checked = true;
  } else {
    document.querySelector('input[value="formato-retangular"]').checked = true;
  }
}

function atualizaMarcacao() {
  if (!marcacaoSelecionada) return;

  marcacaoSelecionada.style.left = inputX.value + 'px';
  marcacaoSelecionada.style.top = inputY.value + 'px';
  marcacaoSelecionada.style.width = inputLargura.value + 'px';
  marcacaoSelecionada.style.height = inputAltura.value + 'px';

  marcacaoSelecionada.dataset.titulo = inputTitulo.value;
  marcacaoSelecionada.dataset.conteudo = inputConteudo.value;
  marcacaoSelecionada.dataset.cor = inputCor.value;

  marcacaoSelecionada.classList.remove('formato-oval', 'formato-retangular');
  const formatoSelecionado = document.querySelector('input[name="formato-da-marcacao"]:checked').value;
  marcacaoSelecionada.classList.add(formatoSelecionado);
}

todasMarcacoes.forEach((marcacao, index) => {
  marcacao.style.cursor = 'pointer';
  
  marcacao.addEventListener('click', () => {
    if (marcacaoSelecionada) {
      marcacaoSelecionada.classList.remove('selecionada');
    }

    marcacao.classList.add('selecionada');
    marcacaoSelecionada = marcacao;
    preencherControles(marcacao);
  });
});

const camposControle = document.querySelectorAll(
  '.controles input:not([type="checkbox"]), .controles textarea'
);

camposControle.forEach(campo => {
  campo.addEventListener('input', atualizaMarcacao);
});

radiosFormato.forEach(radio => {
  radio.addEventListener('change', atualizaMarcacao);
});

const checkboxVisibilidade = document.getElementById('visibilidade-das-marcacoes');

checkboxVisibilidade.addEventListener('change', () => {
  if (checkboxVisibilidade.checked) {
    todasMarcacoes.forEach(marcacao => {
      marcacao.style.display = 'none';
    });
  } else {
    todasMarcacoes.forEach(marcacao => {
      marcacao.style.display = 'block';
    });
  }
});