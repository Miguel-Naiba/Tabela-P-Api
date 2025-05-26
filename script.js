async function fetchData() {
    try {
      const response = await fetch('https://your-api-url.com/periodic-table'); // Substitua pela URL da sua API
      const data = await response.json();
      populateTable(data);
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  }
  
  function populateTable(data) {
    const table = document.getElementById('periodic-table');
  
    data.forEach(element => {
      const row = document.createElement('tr');
  
      const cellSymbol = document.createElement('td');
      cellSymbol.textContent = element.symbol;
  
      const cellName = document.createElement('td');
      cellName.textContent = element.name;
  
      row.appendChild(cellSymbol);
      row.appendChild(cellName);
  
      table.appendChild(row);
    });
  }
  
  fetchData();
