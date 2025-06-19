// Part a
// let person: [string, number, number?];

// // person = [`John`, 21];        // OK
// // console.log(person);
// // person = [21, `John`, 16];    // Error
// // console.log(person);
// // person = [21, 16, `John`];    // Error
// // console.log(person);

// person = [`John`, 21, 16];    // OK
// console.log(person);

// person[3] = `Smith`;
// person[4] = true;

// console.log(person);

// Part b
let something: unknown = `1234`;

console.log(something == 1234);
console.log(something === 1234);
// console.log(something >= 1000);
// console.log(something.length);
console.log(something as number === 1234);
console.log(something as number >= 1000);
console.log((something as string).length);