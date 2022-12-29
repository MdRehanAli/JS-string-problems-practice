const result = Math.pow(3, 8);
console.log(result);

const age1 = 24;
const age2 = 20;
const ageDifference = Math.abs(age2 - age1);
console.log(ageDifference);

if (ageDifference > 3) {
    console.log('You guys are friends.');
}
else {
    console.log('You guys are stay apart.');
}

// ceiling and floor 

let number = 3.556;
const roundNumber = Math.round(number);
console.log(roundNumber);

const ceilingNumber = Math.ceil(number);
console.log(ceilingNumber);

const floorNumber = Math.floor(number);
console.log(floorNumber);

const num1 = 25;
const num2 = 20;
const num3 = 31;

const maxNumber = Math.max(num1, num2, num3);
console.log('Maximum Number is =', maxNumber);

const minNumber = Math.min(num1, num2, num3);
console.log('Minimum Number is =', minNumber);


// console.log(randomNumber);

for (let i = 0; i < 1; i++) {
    const randomNumber = Math.ceil(Math.random() * 6);
    console.log(randomNumber);
}

// Random Number Generate 

for (let i = 0; i < 10; i++) {
    const randomNumbers = Math.ceil(Math.random()*6);
    console.log(randomNumbers);
}