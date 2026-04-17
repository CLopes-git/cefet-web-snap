const todasMarcacoes = document.querySelectorAll('.marcacao');
const inputX = document.getElementById('x-da-marcacao');
const inputY = document.getElementById('y-da-marcacao');
const inputLargura = document.getElementById('largura-da-marcacao');
const inputAltura = document.getElementById('altura-da-marcacao');
const inputTitulo = document.getElementById('titulo-da-marcacao');
const inputConteudo = document.getElementById('conteudo-da-marcacao');
const inputCor = document.getElementById('cor-da-marcacao');

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