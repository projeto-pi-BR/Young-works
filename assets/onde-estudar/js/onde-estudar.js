document.addEventListener('DOMContentLoaded', () => {
    const todasAsSecoes = document.querySelectorAll('.cursos');

    todasAsSecoes.forEach(secao => {
        const setaEsquerda = secao.querySelector('.seta-esquerda img');
        const setaDireita = secao.querySelector('.seta-direita img');
        const areaCurso = secao.querySelector('.area-curso');

        // Atualiza a visibilidade das setas no carregamento
        verificarScroll(areaCurso, setaEsquerda, setaDireita);

        // Evento para scroll com seta direita
        setaDireita.addEventListener('click', () => {
            areaCurso.scrollBy({ left: 300, behavior: 'smooth' });
        });

        // Evento para scroll com seta esquerda
        setaEsquerda.addEventListener('click', () => {
            areaCurso.scrollBy({ left: -300, behavior: 'smooth' });
        });

        // Atualiza visibilidade das setas após scroll manual ou automático
        areaCurso.addEventListener('scroll', () => {
            verificarScroll(areaCurso, setaEsquerda, setaDireita);
        });
    });
});

function verificarScroll(areaCurso, setaEsquerda, setaDireita) {
    // Início
    if (areaCurso.scrollLeft <= 0) {
        setaEsquerda.style.opacity = '0.5';
        setaEsquerda.style.pointerEvents = 'none';
    } else {
        setaEsquerda.style.opacity = '1';
        setaEsquerda.style.pointerEvents = 'auto';
    }

    // Final
    if (areaCurso.scrollLeft + areaCurso.clientWidth >= areaCurso.scrollWidth - 10) {
        setaDireita.style.opacity = '0.5';
        setaDireita.style.pointerEvents = 'none';
    } else {
        setaDireita.style.opacity = '1';
        setaDireita.style.pointerEvents = 'auto';
    }
}
