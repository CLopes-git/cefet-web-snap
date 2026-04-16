const balaozinho = document.getElementById('balaozinho');
const marcacoes = document.querySelectorAll('.marcacao');

marcacoes.forEach(marcacao => {
  marcacao.addEventListener('mouseenter', (evento) => {
    const titulo = marcacao.dataset.titulo;
    const conteudo = marcacao.dataset.conteudo;
    const cor = marcacao.dataset.cor;

    balaozinho.innerHTML = `
      <h2>${titulo}</h2>
      <p>${conteudo}</p>
    `;

    balaozinho.style.color = cor;
    balaozinho.style.display = 'block';
  });

  marcacao.addEventListener('mousemove', (evento) => {
    balaozinho.style.left = evento.pageX + 'px';
    balaozinho.style.top = evento.pageY + 'px';
  });

  marcacao.addEventListener('mouseleave', () => {
    balaozinho.style.display = 'none';
  });
});