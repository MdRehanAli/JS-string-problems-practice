
function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const index = i;
        const element = words[index];
        result.push(element);
    }

    const reversed = result.join(' ');
    return reversed;
}

const wordsString = 'I am a good boy';
const reversedWord = reverseWords(wordsString);
console.log(reversedWord);