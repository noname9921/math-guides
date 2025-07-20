const cardwrapper = document.querySelector('.card-wrapper');
const cardheader = document.querySelector('.cardheader');
const cardcontent = document.querySelector('.cardcontent');
const card = document.querySelector('.card');
card.addEventListener('click', () => {
    card.classList.toggle('open');
    cardwrapper.classList.toggle('open');
    if (window.MathJax && MathJax.typeset) {
        MathJax.typeset([card]);
    }
});


