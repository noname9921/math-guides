const cardwrapper = document.querySelector('.card-wrapper');
const cardheader = document.querySelector('.cardheader');
const card = document.querySelector('.card');
cardheader.addEventListener('click', () => {
    card.classList.toggle('open');
    cardwrapper.classList.toggle('open');
    updateSpinDuration(cardwrapper);
    if (window.MathJax && MathJax.typeset) {
        MathJax.typeset([card]);
    }
});

