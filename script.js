const htmlLogo = document.getElementById('html-logo');
const cssLogo = document.getElementById('css-logo');
const jsLogo = document.getElementById('js-logo');
const htmlWrapper = document.getElementById('html-wrapper');
const cssWrapper = document.getElementById('css-wrapper');
const jsWrapper = document.getElementById('js-wrapper');

const buttonsWrapper = document.getElementById('buttons-wrapper');
const line = document.getElementById('line');
const vLine = document.getElementById('v-line');
const extra = document.getElementById('extra');
const opBtn = document.getElementById('h3-div');
const mHtml = document.getElementById('m-html');
const mCss = document.getElementById('m-css');
const mJs = document.getElementById('m-js');
const ulHeight = document.getElementById('html-list');
const ulWrapper = document.getElementById('ul-wrapper');
const workWrapper = document.getElementById('work-wrapper');
const htmlList = document.querySelectorAll('li.html-list')
const cssList = document.querySelectorAll('li.css-list');
const jsList = document.querySelectorAll('li.js-list');



const listShower = (x) => {

    x.forEach((elem) => {
        elem.classList.toggle('n-disp');

    })

}

opBtn.addEventListener('click', () => {

    vLine.classList.toggle('not-show');
    vLine.classList.toggle('line-extra-slow');

    setTimeout(function () {
        extra.classList.toggle('no-size2');
        extra.classList.toggle('not-show');
    }, 1000);

    line.classList.toggle('not-show');
    line.classList.toggle('line-extra2');


})

htmlLogo.addEventListener('click', () => {

    ulWrapper.classList.toggle('no-size');
    listShower(htmlList);

    Removal(cssLogo, jsLogo);

});

cssLogo.addEventListener('click', () => {

    ulWrapper.classList.toggle('no-size');
    listShower(cssList);
    Removal(htmlLogo, jsLogo);

});

jsLogo.addEventListener('click', () => {
    ulWrapper.classList.toggle('no-size');
    listShower(jsList);
    Removal(cssLogo, htmlLogo);
});

const Removal = (x, y) => {
    x.classList.toggle('no-size');
    x.classList.toggle('logo-img');
    y.classList.toggle('no-size');
    y.classList.toggle('logo-img');

    ulWrapper.classList.toggle('non-visible');
    ulWrapper.classList.toggle('show');
}

// mobile function
const mHandler = (x) => {
    ulWrapper.classList.toggle('non-visible');
    ulWrapper.classList.toggle('show');
    listShower(x);
}

mHtml.addEventListener('click', () => {
    mHandler(htmlList);
    sizeHandler(mCss, mJs);

});

mCss.addEventListener('click', () => {
    mHandler(cssList);
    sizeHandler(mHtml, mJs);

});

mJs.addEventListener('click', () => {
    mHandler(jsList);
    sizeHandler(mHtml, mCss);

});


const sizeHandler = (x, y) => {
    ulWrapper.classList.toggle('no-size');
    ulWrapper.classList.toggle('new-height');
    ulWrapper.classList.toggle('ul-height');
    ulHeight.classList.toggle('ul-height');
    ulHeight.classList.toggle('new-height2');
    workWrapper.classList.toggle('new-height');
    workWrapper.classList.toggle('work-height');
    x.classList.toggle('no-display');
    y.classList.toggle('no-display');
}