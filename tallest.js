/* function maxInArray(numbers) {
    console.log('Height under the Array =', numbers);
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        console.log(element);

        if (element > largest) {
            largest = element;
        }
    }
    return largest;

}

const heights = [167, 190, 120, 165, 137];
const tallest = maxInArray(heights);
console.log('The tallest hight is =', tallest); */

function maxInArray(numbers) {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        console.log(element);

        if (element > largest) {
            largest = element
        }

    }
    return largest;
}

const numbers = [167, 190, 120, 165, 137];
const tallest = maxInArray(numbers);
console.log('The tallest height is =', tallest);