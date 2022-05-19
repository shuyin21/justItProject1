let totalPrice = (x, y) => x * y;

totalPrice(7, 8);

// let num1 = Math.floor(Math.random() * 25);
// console.log(num1);

const pBtn = document.getElementById('party');
const costInput = document.getElementById('cost');


pBtn.addEventListener('click', () => {
    alert('Thanks for choosing us to Book a Venue!!');
    let person = prompt('How many people attending? (Numeric number)');
    alert(`${tableOf5(person)} 
    you will need ${maxTable(person)}
    table to book for ${person} person !
    `);

    costInput.value = price(person);

})


const tableOf5 = (x) => {
    let sum = x % 5;
    if (sum === 0) {
        return '';
    } else {
        return `Unfortunately ${sum} person will not fit on a 5 seater table, and`
    }

}
const maxTable = (x) => {
    let sum = x / 5;

    return Math.ceil(sum);
}
const price = (x) => {
    let person = Number(x) * 7;
    let venue = 500;
    let sum = venue + person;
    return `Your booking is £${sum}`
}