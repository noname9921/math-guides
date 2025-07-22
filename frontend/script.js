const cardwrapper = document.querySelector('.card-wrapper');
const cardheader = document.querySelector('.cardheader');
const cardcontent = document.querySelector('.cardcontent');
const cards = document.querySelectorAll('.card');
const btn = document.getElementById('switch-btn');
const lightGroup = btn.querySelector('.mode-group.lightmode');
const darkGroup = btn.querySelector('.mode-group.darkmode');
lightGroup.classList.add('mode-appear');
lightGroup.classList.remove('mode-disappear');
darkGroup.classList.remove('mode-appear');
darkGroup.classList.add('mode-disappear');
document.body.classList.remove('dark-mode');
let darkMode = false;
let time = 0;



cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('open');
        cardwrapper.classList.toggle('open');
        if (window.MathJax && MathJax.typeset) {
            MathJax.typeset([card]);
        }
    });
});
function switchMode() {
    time += 1;
    if (darkMode === false) {
        lightGroup.classList.remove('mode-appear');
        lightGroup.classList.add('mode-disappear');
        darkGroup.classList.remove('mode-disappear');
        darkGroup.classList.add('mode-appear');
        document.body.classList.add('dark-mode');
    } else if (darkMode === true) {
        darkGroup.classList.remove('mode-appear');
        darkGroup.classList.add('mode-disappear');
        lightGroup.classList.remove('mode-disappear');
        lightGroup.classList.add('mode-appear');
        document.body.classList.remove('dark-mode');
    }
    darkMode = !darkMode
}


const switchBtn = document.getElementById('switch-btn')
const body = document.getElementById('body')
btn.addEventListener('click', () => {
   switchMode()
});
 



