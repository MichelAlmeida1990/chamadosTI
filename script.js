const formularioChamado = document.getElementById('formularioChamado');
const listaChamados = document.getElementById('listaChamados');

formularioChamado.addEventListener('submit', function(e) {
  e.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;

  const itemChamado = document.createElement('li');
  const tituloChamado = document.createElement('h2');
  const descricaoChamado = document.createElement('p');

  tituloChamado.textContent = titulo;
  descricaoChamado.textContent = descricao;

  itemChamado.appendChild(tituloChamado);
  itemChamado.appendChild(descricaoChamado);

  listaChamados.appendChild(itemChamado);

  document.getElementById('titulo').value = '';
  document.getElementById('descricao').value = '';
});
