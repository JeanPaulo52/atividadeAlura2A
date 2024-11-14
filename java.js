// script.js
// Função para salvar a nota no armazenamento local
function salvarNota() {
    const nota = document.getElementById('areaDeNotas').value;
    localStorage.setItem('minhaNota', nota);
    alert('Nota salva!');
}

// Função para carregar a nota do armazenamento local ao carregar a página
function carregarNota() {
    const nota = localStorage.getItem('minhaNota');
    if (nota) {
        document.getElementById('areaDeNotas').value = nota;
    }
}

// Função para configurar o gráfico de progresso
function configurarGrafico() {
    const ctx = document.getElementById('grafico').getContext('2d');
    const grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
            datasets: [{
                label: 'Progresso de Estudo',
                data: [12, 19, 3, 5, 2, 3],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Carregar a nota e configurar o gráfico ao carregar a página
window.onload = function() {
    carregarNota();
    configurarGrafico();
};
