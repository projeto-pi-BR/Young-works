// navbar.js
function loadNavbar() {
    // Carrega HTML
    fetch('/components/navbar.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // Agora adiciona o CSS dinamicamente
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'components/navbar.css';
            document.head.appendChild(link);
        })
        .catch(error => console.error('Erro ao carregar os arquivos:', error));  // Para capturar erros
}

// Chama a função de carregamento do navbar quando o script for executado
loadNavbar();
