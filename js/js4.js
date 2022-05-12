const arrayDiv = document.getElementById('array-div');
const first = document.getElementById('fNum');
const second = document.getElementById('sNum');
const answer = document.getElementById('answer');

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