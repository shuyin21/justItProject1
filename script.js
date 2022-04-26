const htmlLogo = document.getElementById('html-logo');
const cssLogo = document.getElementById('css-logo');
const jsLogo = document.getElementById('js-logo');
const htmlWrapper = document.getElementById('html-wrapper');
const cssWrapper = document.getElementById('css-wrapper');
const jsWrapper = document.getElementById('js-wrapper');
const linkWrapper = document.getElementById('link-wrapper');
const buttonsWrapper = document.getElementById('buttons-wrapper');
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
    Logo.classList.toggle('non-visible');
    Wrapper.classList.toggle('non-visible');
    linkWrapper.classList.toggle('link-toStart');



}

const listShower = (x) => {
    buttonsWrapper.classList.toggle('non-visible');
    buttonsWrapper.classList.toggle('buttons-wrapper');
    x.forEach((elem) => {
        elem.classList.toggle('not-display');
    })

}




