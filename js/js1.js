const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const valueInput = document.getElementById('value-input');
const ul = document.getElementById('unordered');

const listArray = ['flour', 'chocolate', 'eggs'];


const listFunc = () => {

    listArray.forEach(renderList);


    function renderList(element) {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = li.innerHTML + element;

    }
}
listFunc();

const getValueInput = () => {

    // valueInput.innerHTML = input.value;

    var newLi = document.createElement('li');
    newLi.innerHTML = input.value.toString();
    ul.appendChild(newLi);
    input.value = '';

}

h1.addEventListener('click', () => {
    console.log('working');
});

// Numbers
const height = 185;

const weight = 98;

// Strings

const hello = 'Hello World';


let person = {
    fName: 'Gyula', lName: 'Nagy', age: 37
}

// Boolean

// true or false value

let firstN = 12;
let secN = '12';

let p = (firstN == secN);
let s = (firstN === secN);


// Arrays

const languages = ['Korean', 'Japanese', 'English'];

languages.push('hungarian');

let x = 3;

let y = 4;

let z = 5;


// 1) value equal to value plus value
console.log(x + y == x + y);
// 2) value not equal to value plus value 
console.log(x + y !== y + z);
// 3) value equal to value divided value
console.log(z == z / y);
// 4) value equal (value and type) to value
console.log(x === y);
// 5) value greater than value
console.log(x > y);
// 6) value subtract value less than or equal to value plus value
console.log(z - x <= x + y);
// 7) value times value greater than value
console.log(x * y > z);

