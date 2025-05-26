function criarTabelaPeriodica(colecaoElementos) {
  const tabela = document.createElement('table');
  let infoFixa = false;
  const infoDiv = document.createElement('div');
  infoDiv.style.position = 'absolute';
  infoDiv.style.backgroundColor = '#fff';
  infoDiv.style.padding = '10px';
  infoDiv.style.display = 'none';
  infoDiv.style.zIndex = '1000';
  document.body.appendChild(infoDiv);

  colecaoElementos.forEach((elemento) => {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = elemento.simbolo;
    td.title = `${elemento.nome} (${elemento.massaAtomica})`;

    td.addEventListener('mouseover', () => {
      if (!infoFixa) {
        infoDiv.style.display = 'block';
        infoDiv.style.border = `2px solid ${elemento.corGrupo || '#000'}`;
        infoDiv.innerHTML = `
          <h2 style="margin: 0; color: ${elemento.corGrupo};">${elemento.nome}</h2>
          <p style="margin: 10px 0; font-size: 14px;">
            <strong>Número Atômico:</strong> ${elemento.numeroAtomico}<br>
            <strong>Massa Atômica:</strong> ${elemento.massaAtomica}<br>
            <strong>Símbolo:</strong> ${elemento.simbolo}<br>
          </p>
        `;
      }
    });

    td.addEventListener('mousemove', (event) => {
      infoDiv.style.top = `${event.pageY + 10}px`;
      infoDiv.style.left = `${event.pageX + 10}px`;
    });

    td.addEventListener('mouseout', () => {
      if (!infoFixa) {
        infoDiv.style.display = 'none';
      }
    });

    td.addEventListener('click', () => {
      if (infoFixa && infoDiv.innerHTML.includes(elemento.nome)) {
        infoFixa = false;
        infoDiv.style.display = 'none';
      } else {
        infoFixa = true;
        infoDiv.style.display = 'block';
        infoDiv.style.border = `2px solid ${elemento.corGrupo || '#000'}`;
        infoDiv.innerHTML = `
          <h2 style="margin: 0; color: ${elemento.corGrupo};">${elemento.nome}</h2>
          <p style="margin: 10px 0; font-size: 14px;">
            <strong>Número Atômico:</strong> ${elemento.numeroAtomico}<br>
            <strong>Massa Atômica:</strong> ${elemento.massaAtomica}<br>
            <strong>Símbolo:</strong> ${elemento.simbolo}<br>
          </p>
        `;
      }
    });

    tr.appendChild(td);
    tabela.appendChild(tr);
  });

  document.body.appendChild(tabela);
}

// Supondo que colecaoElementos já está definido
criarTabelaPeriodica(colecaoElementos);
