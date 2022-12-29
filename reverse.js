
// function reverseStr(text) {
//     let reversed = '';

//     for (let i = text.length - 1; i >= 0; i--) {
//         const index = i;
//         const element = text[index];
//         reversed = reversed + element;
//         console.log(element);
//     }
//     return reversed;
// }

// const text = 'I am a playboy'
// const reverse = reverseStr(text);
// console.log(reverse);


// string to Reverse array 

// function reverseArray(text) {
//     const texts = text.split(' ');

//     const result = [];
//     for (let i = texts.length - 1; i >= 0; i--) {
//         const index = i;
//         const element = texts[index];

//         result.push(element);

//     }
//     const revers = result.join(' ');
//     return revers;

// }

// const tex = ['I am a good boy'];
// const revers = reverseArray(tex);
// console.log(revers);


// function reverseWords(str){
//     const words = str.split(' ');
//     const result= [];

//     for(let i = words.length - 1; i >= 0; i--){
//         const element = words[i];
//         result.push(element);

//     }
//     const reversed = result.join(' ');
//     return reversed;
// }

// const myString = 'I am a good boy';
// const text = reverseWords(myString);
// console.log(text);




// reverse string 

function reverseString(str) {
    const words = str.split(' ');
    const rev = [];
    for (let i = str.length - 1; i >= 0; i--) {
        const index = i;
        const element = words[index];
        rev.push(element);

    }
    const rever = rev.join(' ');
    return rever;

}


const str = 'I am a good boy';
const string = reverseString(str);
console.log(string);