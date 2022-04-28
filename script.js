const htmlLogo = document.getElementById('html-logo');
const cssLogo = document.getElementById('css-logo');
const jsLogo = document.getElementById('js-logo');
const htmlWrapper = document.getElementById('html-wrapper');
const cssWrapper = document.getElementById('css-wrapper');
const jsWrapper = document.getElementById('js-wrapper');
const linkWrapper = document.getElementById('link-wrapper');
const buttonsWrapper = document.getElementById('buttons-wrapper');
const line = document.getElementById('line');
const vLine = document.getElementById('v-line');
const extra = document.getElementById('extra');
const opBtn = document.getElementById('h3-div');
const htmlList = document.querySelectorAll('li.html-list')
const cssList = document.querySelectorAll('li.css-list');



htmlLogo.addEventListener('click', () => {
    Removal(cssLogo, cssWrapper);
    Removal(jsLogo, jsWrapper);
    listShower(htmlList);

});


cssLogo.addEventListener('click', () => {
    Removal(htmlLogo, htmlWrapper);
    Removal(jsLogo, jsWrapper);
    listShower(cssList);

});
jsLogo.addEventListener('click', () => {
    Removal(htmlLogo, htmlWrapper);
    Removal(cssLogo, cssWrapper);
    listShower();

})


const Removal = (Logo, Wrapper) => {
    Logo.classList.toggle('logo-img');
    Wrapper.classList.toggle('logo-wrapper');
    Logo.classList.toggle('no-width');
    Wrapper.classList.toggle('no-width');
    linkWrapper.classList.toggle('link-toStart');



}

const listShower = (x) => {
    buttonsWrapper.classList.toggle('no-width');
    buttonsWrapper.classList.toggle('buttons-wrapper');
    x.forEach((elem) => {
        // elem.classList.toggle('non-visible');

        elem.classList.toggle('not-display');




    })

}


opBtn.addEventListener('click', () => {

    vLine.classList.toggle('not-show');
    vLine.classList.toggle('line-extra-slow');

    setTimeout(function () {
        extra.classList.toggle('no-size');
        extra.classList.toggle('not-show');
    }, 1000);

    line.classList.toggle('not-show');
    line.classList.toggle('line-extra2');


    // extra.classList.toggle('line-extra2');
})

