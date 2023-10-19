const addTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

const varOne = addTwoNumbers;
const varTwo = addTwoNumbers();

console.log(varOne); // Print the function? [Function: addTwoNumbers]
console.log(varTwo); // NaN (YEAH!)

console.log(varOne(1, 2));

// REFERENCING !

let a = 1;
let b = 1;

console.log(a === b);

let obj1 = { a: 1 };
let obj2 = { a: 1 };
let obj3 = obj1;

console.log(obj1 === obj2);
console.log(obj1 === obj3);
