const arrayDiv = document.getElementById('array-div');
const first = document.getElementById('fNum');
const second = document.getElementById('sNum');
const answer = document.getElementById('answer');
const display = document.getElementById('display');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const selection = document.getElementById('selection');


const fruits = ["apple", "banana", "pear", "grapes", "cherries", "plum", "pineapple"];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];

    let ul = document.createElement('ul');
    let li = document.createElement('li');
    arrayDiv.appendChild(ul);
    ul.appendChild(li);
    li.innerHTML = fruit;

}

const owner = { name: "John Doe", age: 45 };

const till = () => {

    let answerNumber = first.value * second.value;
    answer.innerHTML = answerNumber;
    first.value = '';
    second.value = '';
    console.log(first);
}

const calculate = () => {
    let sel = selection.value;
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let sum = ''
    if (sel === '+') {
        sum = n1 + n2;
    }
    else if (sel === '-') {
        sum = n1 - n2;
    }
    else if (sel === '*') {
        sum = n1 * n2;
    }
    else if (sel === '/') {
        sum = n1 / n2;
    }
    else if (sel === '%') {
        sum = n1 % n2;
    }

    display.innerHTML = n1 + sel + n2 + '=' + ' ' + sum;
    num1.value = '';
    num2.value = '';
}