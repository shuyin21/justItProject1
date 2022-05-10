const js = document.querySelector('#js');
const css = document.querySelector('#css');
const html = document.querySelector('#html');
const itBtn = document.querySelector('#it-btn');
const personalBtn = document.querySelector('#personal-btn');
const personalList = document.querySelectorAll('.p-pro');
const lgWrapper = document.querySelector('#lg-wrapper');
const htmlList = document.querySelectorAll('.html-li');
const cssList = document.querySelectorAll('.css-li');
const jsList = document.querySelectorAll('.js-li');


personalBtn.addEventListener('click', () => {
    listShower(personalList);
    listHider(htmlList, cssList, jsList, htmlList);
    lgWrapper.classList.add('non-visible');
})



js.addEventListener('click', () => {
    notDisplayer(css, html);
    listShower(jsList);
});
css.addEventListener('click', () => {
    notDisplayer(html, js);
    listShower(cssList);
});
html.addEventListener('click', () => {
    notDisplayer(css, js);
    listShower(htmlList);
});
itBtn.addEventListener('click', () => {
    lgWrapper.classList.toggle('non-visible');
    listHider(htmlList, cssList, jsList, personalList);
    displayer(html, css, js);

})

const listShower = (x) => {

    x.forEach((elem) => {
        elem.classList.toggle('not-displayer');

    });
}
const listHider = (p, x, y, z) => {
    p.forEach((elem) => {
        elem.classList.add('not-displayer');
    });
    x.forEach((elem) => {
        elem.classList.add('not-displayer');
    });
    y.forEach((elem) => {
        elem.classList.add('not-displayer');
    });
    z.forEach((elem) => {
        elem.classList.add('not-displayer');
    });
}
const notDisplayer = (x, y) => {
    x.classList.toggle('not-displayer');
    y.classList.toggle('not-displayer');

}
const displayer = (x, y, z) => {

    x.classList.remove('not-displayer');
    y.classList.remove('not-displayer');
    z.classList.remove('not-displayer');
}