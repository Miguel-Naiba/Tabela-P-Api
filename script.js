function createPeriodicTable(elements) {
    const tabela = document.createElement('table');
    table.classList.add('periodic-table');
   
    const infoDiv = document.createElement('div');
    infoDiv.id = 'info-element';
    infoDiv.style.position = 'absolute';
    infoDiv.style.top = '80px';
    infoDiv.style.left = '42%';
    infoDiv.style.transform = 'translateX(-50%)';
    infoDiv.style.padding = '20px';
    infoDiv.style.border = '2px solid';
    infoDiv.style.borderRadius = '10px';
    infoDiv.style.backgroundColor = '#F9F9F9';
    infoDiv.style.fontFamily = 'Arial, sans-serif';
    infoDiv.style.fontSize = '16px';
    infoDiv.style.color = '#333';
    infoDiv.style.width = '400px';
    infoDiv.style.textAlign = 'center';
    infoDiv.style.display = 'none';
    document.body.appendChild(infoDiv);
   
    let infoFixa = false;
   
    for (let line = 1; line <= 10; line++) {
      const tr = document.createElement('tr');
   
      for (let column = 1; column <= 18; column++) {
        const td = document.createElement('td');
        td.classList.add('celula');
   
        const element = elements.find(el => el.row == row && el.column == column);
   
        if (element) {
          td.innerHTML = `
            <div style="background-color: ${elemento.corGrupo || 'FFFFFF'}; padding: 5px; border-radius: 5px;">
              <strong>${element.symbol}</strong><br>
              <span>${element.atomicNumber}</span>
            </div>
          `;
          td.title = `${element.name} (${element.atomicmass})`;
   
          td.addEventListener('mouseover', () => {
            if (!infoFixa) {
              infoDiv.style.display = 'block';
              infoDiv.style.border = `2px solid ${elemento.corGrupo || '#000'}`;
              infoDiv.innerHTML = `
                <h2 style="margin: 0; color: ${element.colorGroup};">${element.name}</h2>
                <p style="margin: 10px 0; font-size: 14px;">
                  <strong>Atomic Number:</strong> ${element.atomicnumber}<br>
                  <strong>Atomic Mass:</strong> ${element.atomicmass}<br>
                  <strong>Symbol:</strong> ${element.symbol}<br>
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
            if (infoFixed && infoDiv.innerHTML.includes(element.name)) {
              infoFixed = false;
              infoDiv.style.display = 'none';
            } else {
              infoFixa = true;
              infoDiv.style.display = 'block';
              infoDiv.style.border = `2px solid ${elemento.corGrupo || '#000'}`;
              infoDiv.innerHTML = `
                <h2 style="margin: 0; color: ${element.colorGroup};">${element.name}</h2>
                <p style="margin: 10px 0; font-size: 14px;">
                  <strong>Atomic Number:</strong> ${element.atomicnumber}<br>
                  <strong>Atomic Mass:</strong> ${element.atomicmass}<br>
                  <strong>Symbol:</strong> ${element.symbol}<br>
                </p>
              `;
            }
          });
        }
   
        tr.appendChild(td);
      }
   
      table.appendChild(tr);
    }
   
    document.body.appendChild(tabela);
  }
   
  createPeriodicTable(elementsCollection);
   