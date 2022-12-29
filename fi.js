function fibonacciSeries(numbers) {
    const fibo = [0, 1];
    for (let i = 2; i <= numbers; i++) {
        // const index = i;
        // const element = numbers[index];
        fibo[i] = fibo[i - 1] + fibo[i - 2];

        const newFibo = fibo.push();
    }
    return fibo;
}

const numbers = 9;
const number = fibonacciSeries(numbers);
console.log('Fibonacci series=', number);