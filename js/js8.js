const hMessage = document.getElementById('hiddenMessage');
const subBtn = document.querySelector('.subscribe');
const timeHolder = document.getElementById('time');
const hello = () => {
    console.log('Hello World')
}

const timeout = () => {
    setTimeout(hello, 5000);
}

timeout();

function myFunction(x, y) {
    console.log(x, y);
}
setTimeout(myFunction, 5000, 'john', 'smith');

const hiddenMFunc = () => {
    setTimeout(show, 20000)
}
const show = () => {
    hMessage.classList.remove('display');
}
hiddenMFunc();
subBtn.addEventListener('click', show);

// clock
const timeHandler = () => {
    let d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let time = hour + ':' + min + ':' + sec;
    timeHolder.innerHTML = time;
}
const clockHandler = () => {
    setInterval(timeHandler, 1000)
}
clockHandler();

const myDate = new Date(1825, 7, 16);
console.log(myDate);