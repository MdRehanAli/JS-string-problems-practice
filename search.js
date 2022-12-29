const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. Kala kala Sada sada.'


const searchString = 'Pakhi';
const doesExist = lyrics.includes(searchString.toLowerCase());
// const doesExist = lyrics.includes('Pakhi');
console.log(doesExist);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExistOneLine);


// indexOf() 
console.log(lyrics.indexOf('a'));

if (lyrics.indexOf('sada') !== -1) {
    console.log('It does not exist');
}

else {
    console.log('It exist.');
}

const isStart = lyrics.startsWith('Tumi');
console.log(isStart);

const fileName = 'myBiodata.pdf';
const otherFile = 'mypicture.jpg';

const isEndsWith = fileName.endsWith('.png');
console.log(isEndsWith);
