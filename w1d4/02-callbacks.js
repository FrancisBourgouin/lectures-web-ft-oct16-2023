// Higher Order Functions
// A function that will not work by itself
// It needs another function to be functionnal

// Callbacks
// Is a function given to a higher order function in order to make it work

// 7
// 7 - 2 = 5
// 5 - 2 = 3
// 3 - 2 = 1
// 1 - 2 XXX

const checkIfOdd = function (number) {
  const isOdd = number % 2 === 1;

  if (isOdd) {
    return console.log(`The number ${number} is odd`);
  }
  return console.log(`The number ${number} is not odd`);
};

const checkIfEven = function (number) {
  const isEven = number % 2 === 0;

  if (isEven) {
    return console.log(`The number ${number} is even`);
  }
  return console.log(`The number ${number} is not even`);
};

const listOfNumbers = [1, 42, 9001, 1337];

const checkIfNumbersAreOdd = function (listOfNumbers) {
  for (const number of listOfNumbers) {
    checkIfOdd(number);
  }
};

// checkIfNumbersAreOdd(listOfNumbers);

const forEachNumber = function (listOfNumbers, action) {
  for (const number of listOfNumbers) {
    action(number);
  }
};

// forEachNumber(listOfNumbers, checkIfEven);
// forEachNumber(listOfNumbers, checkIfOdd);

listOfNumbers.forEach(checkIfEven);
listOfNumbers.forEach(checkIfOdd);

const checkIfNumberBiggerThanAThousand = function (number) {
  if (number > 1000) {
    return console.log("Number is bigger than 1000");
  }
  return console.log("Number is smaller than 1000");
};

// .forEach
console.log("FOR EACH TIME :D \n\n");

listOfNumbers.forEach(function (number) {
  console.log(number > 1000);
});

const arrowFunction = (number) => console.log(number > 1000);

// const listOfNumbers = [1, 42, 9001, 1337];
// .forEach => For every element of the array, execute the callback
listOfNumbers.forEach((number) => console.log(number > 1000));

// const someObject = { a: 1, b: 2 };
// Object.keys(someObject)

const filterList = function (listOfNumbers, filterAction) {
  const output = [];
  for (const number of listOfNumbers) {
    const isPassing = filterAction(number);

    if (isPassing) {
      output.push(number);
    }
  }
  return output;
};
// checkIfOdd
// number => number % 2 === 1 (Arrow function, implicitely return the value)
// Name of that function? The function with no name
// Anonymous function
// Anonymous === throwaway function, or very small function

const filteredList = filterList([1, 7, 4, 9, 12, 31], (number) => number % 2 === 1);

const filteredList1 = filterList([1, 7, 4, 9, 12, 31], function (number) {
  return number % 2 === 1;
});

const checkIsodd = function (number) {
  return number % 2 === 1;
};

const filteredList2 = filterList([1, 7, 4, 9, 12, 31], checkIsodd);

const filteredNumbers = listOfNumbers.filter(checkIsodd);

// const filteredNumbers1 = listOfNumbers.filter((number, index) => {
//   if (number % 2 === 0) {
//     console.log(`Added the number ${number} at position ${index}`);
//     return true;
//   }
//   return false;
// });

const fancyFilterOut = (number, index) => {
  if (number % 2 === 0) {
    console.log(`Added the number ${number} at position ${index}`);
    return true;
  }
  return false;
};

const filteredNumbers2 = filterList(listOfNumbers, fancyFilterOut);

console.log(filteredNumbers2);

// (number, index) =>
