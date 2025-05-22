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
}

tr.appendChild(td);
}

tabela.appendChild(tr);
}

document.body.appendChild(tabela);
}

criarTabelaPeriodica(colecaoElementos);
