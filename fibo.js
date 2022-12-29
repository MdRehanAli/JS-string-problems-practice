// Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 

// const fibo= [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// fibo[3] = fibo[2] + fibo[1];
// fibo[4] = fibo[3] + fibo[2];
// fibo[5] = fibo[4] + fibo[3];
// fibo[50] = fibo[49] + fibo[48];
// fibo[487] = fibo[486] + fibo[485];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

// const fibo = [0, 1];
// for (let i = 2; i < 25; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);


// const fibo = [0, 1];
// for (let i = 2; i < 25; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);


function fibonacciSeries(numbers) {

    const fibo = [0, 1];

    for (let i = 2; i <= numbers; i++) {

        const number = numbers[i];
        fibo[i] = fibo[i - 1] + fibo[i - 2];

        const newNum = fibo.push();
        // console.log(newNum);
    }
    return fibo;
}

const newNumber = fibonacciSeries(8);
console.log(newNumber);

// const newNumber1 = number.round(number.ceil(numbers.floor(number)));
     
