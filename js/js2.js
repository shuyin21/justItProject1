const over = document.getElementById('over');

const str = 'popopo';
let fName = 'John';


console.log(str.lastIndexOf('po'));
console.log(fName.slice(0, 2));
console.log(fName.substring(0, 2));
console.log(`welcome ${fName}` + ' ' + str);

let newStr = 'hello\ ';

console.log(newStr + fName);

const overWrite = () => {
    document.write("<h2>I am the document.write . Everything overwritten now.</h2>")
}
let country = 'germany';
console.log(country.substring(1, 4));
console.log(typeof country);

let strin = '        I am Gyula      and    learning   javascript.      '