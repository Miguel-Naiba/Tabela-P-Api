function calcular() {
    const e = 1.6e-19; 
    const K = 8.99e9; 

    const n = parseFloat(document.getElementById('n').value);
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const d = parseFloat(document.getElementById('d').value);

    if (isNaN(n) || isNaN(q1) || isNaN(q2) || isNaN(d) || d === 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const Q = n * e; 
    const F = (K * q1 * q2) / (d ** 2);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        Carga elétrica (Q): ${Q.toExponential(2)} C<br>
        Força de interação (F): ${F.toExponential(2)} N
    `;
}