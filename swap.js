let a = 10;
let b = 15;
console.log(a, b);

let temp = a;
a = b;
b = temp;

console.log(a, b);


// Approach 2 
[a, b] = [b, a];
console.log(a, b);


// Approach 3

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);
