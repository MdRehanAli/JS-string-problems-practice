
const myAddress = '212/A, Shamoli Tower, Shamoli.'; 
const myAddressLength = myAddress.length;
console.log(myAddressLength);

const name = 'Baker Vai';
const nameLength = name.length;
console.log(nameLength);

const names = name[4];
console.log(names);

name[4] = 'm';
console.log(name);

const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userInput.toUpperCase());
console.log(userInput.toLowerCase());
console.log(userInput.toLocaleLowerCase());

if (userName.toLowerCase() === userInput.toLowerCase()){
    console.log('Valid User.')
}
else{
    console.log('Invalid User.')
}

