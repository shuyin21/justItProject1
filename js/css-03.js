const burger = document.getElementById('burger');
const nav = document.getElementById('about-nav');
const li = document.querySelectorAll('.about-li');
const a = document.querySelectorAll('.about-a');


burger.addEventListener('click', () => {
    nav.classList.toggle('about-nav');
    nav.classList.toggle('non-display');
    remover(a);
    remover(li);
})
const remover = (x) => {
    x.forEach((elem) => {
        elem.classList.toggle('not-display');
    })
}
