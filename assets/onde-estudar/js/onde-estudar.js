// Seleciona todas as setas direitas e esquerdas
const setasDireita = document.querySelectorAll('.seta-direita');
const setasEsquerda = document.querySelectorAll('.seta-esquerda');

// Adiciona eventos para cada seta direita
setasDireita.forEach((seta, index) => {
    seta.addEventListener('click', () => {
        // Encontra a área de curso correspondente (irmão anterior da seta)
        const areaCurso = seta.closest('.cursos').querySelector('.area-curso');
        areaCurso.scrollBy({ left: 300, behavior: 'smooth' });
    });
});

// Adiciona eventos para cada seta esquerda
setasEsquerda.forEach((seta, index) => {
    seta.addEventListener('click', () => {
        // Encontra a área de curso correspondente (irmão anterior da seta)
        const areaCurso = seta.closest('.cursos').querySelector('.area-curso');
        areaCurso.scrollBy({ left: -300, behavior: 'smooth' });
    });
});

function verificarScroll(areaCurso, setaEsquerda, setaDireita) {
    // Verifica se chegou ao início
    if (areaCurso.scrollLeft <= 0) {
        setaEsquerda.style.opacity = '0.5';
        setaEsquerda.style.pointerEvents = 'none';
    } else {
        setaEsquerda.style.opacity = '1';
        setaEsquerda.style.pointerEvents = 'auto';
    }
    
    // Verifica se chegou ao final
    if (areaCurso.scrollLeft + areaCurso.clientWidth >= areaCurso.scrollWidth - 10) {
        setaDireita.style.opacity = '0.5';
        setaDireita.style.pointerEvents = 'none';
    } else {
        setaDireita.style.opacity = '1';
        setaDireita.style.pointerEvents = 'auto';
    }
}

// Chame esta função após cada scroll e no carregamento da página

verificarScroll()