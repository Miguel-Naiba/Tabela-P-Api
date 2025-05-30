function criarTabelaPeriodica() {
  const tabelaContainer = document.getElementById('tabela-periodica');
  const infoElemento = document.getElementById('info-elemento');

  if (!tabelaContainer || !infoElemento) {
    console.error('Elemento com id "tabela-periodica" ou "info-elemento" não encontrado.');
    return;
  }


  colecaoElementos.forEach((elemento) => {
    const celula = document.createElement('div');
    celula.classList.add('elemento', elemento.tipo); 
    celula.style.gridRow = elemento.linha;
    celula.style.gridColumn = elemento.coluna;

    celula.innerHTML = `
      <div class="numero-atomico">${elemento.numeroAtomico}</div>
      <div class="simbolo">${elemento.simbolo}</div>
      <div class="nome">${elemento.nome}</div>
    `;

    

    celula.addEventListener('mouseenter', () => {
      infoElemento.innerHTML = `
        <strong>${elemento.nome} (${elemento.simbolo})</strong><br>
        Número Atômico: ${elemento.numeroAtomico}<br>
        Tipo: ${elemento.grupo} <br>
        Raio Atômico: ${elemento.raioAtomico}
      `;
      infoElemento.classList.add('visible');
    });

    celula.addEventListener('mouseleave', () => {
      infoElemento.classList.remove('visible');
    });

    tabelaContainer.appendChild(celula);
  });
}

document.addEventListener('DOMContentLoaded', criarTabelaPeriodica);