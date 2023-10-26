// Callbacks

// Modularize your code, break it down in smaller chunks
// Code is very repetitive

const listOfNumbers = [1, 2, 3, 4, 5, 6];

for (const number of listOfNumbers) {
  console.log(number * number);
}

listOfNumbers.forEach((number) => console.log(number * number));

const newList = [];
for (const number of listOfNumbers) {
  newList.push(number * number);
}

listOfNumbers.map((number) => number * number);

// Callbacks : synchronous or asynchronous ? Both!
// Do we need callbacks when when working with async code?

setTimeout(console.log("Wiggle wiggle"), 2000);

fs.readFile();

const addTwoNumbers = (a, b) => a + b;

const functionThatTakesInACallback = (action) => {
  const num1 = 10;
  const num2 = 20;

  return action(num1, num2);
};

functionThatTakesInACallback(addTwoNumbers);

const repeatSomethingASpecificAmountOfTimes = (amount) => {
  for (let i = 0; i < amount; i++) {
    console.log("Something");
  }
};

repeatSomethingASpecificAmountOfTimes(addTwoNumbers(4, 5));

console.log("Hello!");

setTimeout(() => {
  console.log("WAZZZAA");
  setTimeout(() => {
    console.log("YO YO YO");
  }, 1000);
}, 1000);

console.log("Bye!");

// Hello
// Bye!
// WAZZZAA
// YO YO YO

// Async or Sync
// setTimeout is synchronous
// The callback that will be called when the timer finishes, async

setTimeout(() => {
  console.log("Hello!");
}, 0);
setTimeout(() => {
  console.log("Bye");
}, 0);
