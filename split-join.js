const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kala sada sada.'

const parts = lyrics.split(' ');
console.log(parts);

const words = lyrics.split('');
console.log(words);

const sentences = lyrics.split('. ');
console.log(sentences);

const partial = lyrics.slice(12, 22);
console.log(partial);

const partial2 = lyrics.substring(12, 26);
console.log(partial2);

const position = lyrics.at(12);
console.log(position);

const string1 = 'Baker';
const string2 = 'Vai';
const stringConcat = string1.concat(' ', string2);
console.log(stringConcat);

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'bosonto kale tomai bolte pari ni',
    'kala kala sada sada.'
]

const stringJoin = lines.join();
console.log(stringJoin);


