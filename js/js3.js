const answer = document.getElementById('answer');
const maxHr = document.getElementById('max-hr');
const todayHolder = document.getElementById('todayDay');

const calculateMaxHr = () => {
    const athleteAge = prompt('What is your age ?');
    const bodyweight = prompt('How much is your weight ?');
    let stageOne = 214 - (0.5 * athleteAge) - (0.11 * bodyweight);

    answer.innerHTML = `your maximum HR is `;
    maxHr.innerHTML = ` ${stageOne}`;
}


const ifPractice = () => {
    let question = prompt('Would you like to eat an ice cream ? answer yes or no');

    if (question == 'yes') {
        let weight = prompt('What is your weight ?')
        if (weight < 80) {
            alert('Ok you can have one')
        }
        else {
            alert('better if you diet a bit instead!!! 😀')
        }
    }
    else {
        alert('Why you here then? Get the F.... Out !!! 😀')
    }
}

// Task - use a switch statement to display the days of the week.

// 1 - Sunday, 2 Monday.... 7 = Saturday
const todayDay = new Date().getDay();

let dayContainer = '';
switch (todayDay) {
    case 1: dayContainer = 'Monday';

        break;
    case 2: dayContainer = 'Tuesday';
        break;
    case 3: dayContainer = 'Wednesday';
        break;
    case 4: dayContainer = 'Thursday';
        break;
    case 5: dayContainer = 'Friday';
        break;
    case 6: dayContainer = 'Saturday';
        break;
    case 7: dayContainer = 'Sunday';
    default: dayContainer = '';
        break;
}
todayHolder.innerHTML = dayContainer;