// Callbacks

// Split code in smaller chunks, more manageable
// We need callbacks for asynchronous code
// Callbacks for synchronous are nice, but not necessary

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7];

const squaredListOfNumbers = listOfNumbers.map((number) => number * number);

// Async

setTimeout(() => {
  console.log("Good morning!");
}, 1000);
setTimeout(() => {
  console.log("How are you?");
}, 1000);

// setTimeout async? Is not asynchronous, but its callback will be called asynchronously

// request("...", (err, data) => {});

// Mocha test when the function throws

const bob = "Chicken";

// try {
//   bob = "Poulet";
//   // (╯°□°）╯︵ ┻━┻ => Throwing an error, error wasn't caught, then we crash, Unhandled exception
// } catch (error) {
//   console.log("Oh no :(");
// }

// console.log("Hello!");

setTimeout(() => {
  try {
    bob = "Poulet";
  } catch (error) {
    console.log("Oh no :(");
  }
}, 1000);
// (╯°□°）╯︵ ┻━┻ => Throwing an error, error wasn't caught, then we crash, Unhandled exception
