/*
Data Types
Primitive Data Types
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol

Non-Primitve Data Types
1. Object
 */

let a = "hello";
let b = a;
// console.log(a, b);
a = 'hey';
// console.log(a, b);

const x = { job: 'web developer' };
const y = x;
console.log(x, y);
x.job = 'front end developer';
console.log(x, y);