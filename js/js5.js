const ul = document.getElementById('ul');



const promptF = () => {
    let name = prompt('Who are you ?');
    let age = Number(prompt('Hello ' + name + "! " + "How old are you ?"));
    console.log(age);
    if (age > 18) {
        alert(`Welcome in our Club ${name}`);
    }
    else if (age < 18) {
        alert(`You are not old enough for this club ${name}`);
    }
    else if (isNaN(age)) {
        alert('Come back next time and give your proper age in number!!')
    }
    else {
        alert(`I am sorry but i need to ask you to leave!!`)
    }
}
const fruits = ['apple', 'banana', 'pear', 'grapes'];
const createList = () => {

    for (let i = 0; i <
        fruits.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML = fruits[i] + '<b> for loop </b>'; console.log(fruits[i])
    }

}
const createList2 = () => {
    fruits.forEach((item) => {
        let li = document.createElement('li');
        ul.appendChild(li);

        li.innerHTML = item + '<b> forEach loop </b>'; console.log(item)
    })
}
let myN = 0;
while (myN < 5) {
    myN++;
    console.log(myN);
}

let n1 = 0;
let n2 = 1;
while (n1 < 200) {
    console.log(n1);
    let n3 = n1 + n2;
    n1 = n2;
    n2 = n3;

}

let userNames = ['apple', 'banana', 'orange', 'peach'];

let username = 'peach';
let text = 'is the username.';
// for (i = 0; i < userNames.length; i++) {


//     if (userNames[i] == username) {
//         let newText = username + ' ' + text;
//         console.log(newText);
//     }


// }
userNames.forEach((item) => {
    if (item === username) {
        let newText = username + ' ' + text;
        console.log(newText);
    }
})