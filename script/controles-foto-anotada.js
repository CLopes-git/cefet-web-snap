const selectFiltro = document.getElementById('filtro-da-foto');
const imagem = document.querySelector('.foto-anotada > img');

selectFiltro.addEventListener('change', () => {
  const filtroSelecionado = selectFiltro.value;
  imagem.style.filter = filtroSelecionado;
});