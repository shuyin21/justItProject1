const js = document.querySelector('#js');
const itBtn = document.querySelector('#it-btn');
const lgWrapper = document.querySelector('#lg-wrapper');
const htmlList = document.querySelectorAll('.html-li');

js.addEventListener('click', () => {
    js.classList.toggle('visible');
});
itBtn.addEventListener('click', () => {
    lgWrapper.classList.toggle('non-visible');
    // listShower(htmlList);
})

const listShower = (x) => {

    x.forEach((elem) => {
        elem.classList.toggle('visible');

    })

}