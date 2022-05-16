const box = document.querySelector('.small-box');
const btn = document.querySelector('button');
const magic = document.querySelector('#magic h3');

box.addEventListener('mouseenter', () => {

    box.classList.add('extra-size');
});
box.addEventListener('mouseleave', () => {

    box.classList.remove('extra-size');
});

btn.addEventListener('click', () => {

    magic.classList.toggle('hide');

})