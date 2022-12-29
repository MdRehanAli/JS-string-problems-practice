

// Write a function that will take 3 numbers and return the max number.

function maxNumber(num1, num2, num3) {


    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3) {
        return num2;
    }
    else {
        return num3;
    }
}

var number = maxNumber(30, 25, 20)
console.log('Maximum number is =', number);


// Write a function that will take 3 parameters and will return the min number.

function minNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return num1;
    }
    else if (num2 < num1 && num2 < num3) {
        return num2;
    }
    else {
        return num3;
    }
}

var number = minNumber(30, 25, 20);
console.log('Minimum number is = ', number);

const number1 = 80;
const number2 = 70;
const number3 = 90;

const maxNum = Math.max(number1, number2, number3);
console.log('The Maximum number is =', maxNum);

const minNum = Math.min(number1, number2, number3);
console.log('The Minimum number is =', minNum);

