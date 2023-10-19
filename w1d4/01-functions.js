// Why are functions useful?

// Organize code better
// Reuse code
// DRY! Less repetition
// Less typing === less mistakes

const someList = ["Dylan", "Justin", "Todd", "Urvish", "Ekaterina"];

const sayHiToTheFirstPersonInTheList = function () {
  console.log(`Hi ${someList[0]}`);
};

// sayHiToTheFirstPersonInTheList();

const sayHi = function (name) {
  console.log(`Hi ${name}!`);
};

sayHi(someList[1]);
sayHi(someList[4]);

const sayBye = function (name) {
  console.log(`Bye ${name}!`);
};

// Merge sayHi & sayBye

const saySomething = function (name, isGreeting) {
  if (isGreeting) {
    return console.log(`Hi ${name}!`);
  }

  return console.log(`Bye ${name}!`);
};

saySomething("Ehab", true);
saySomething("Zak", false);

const saySomethingToEveryone = function (listOfNames) {
  let isGreet = true;
  for (const name of listOfNames) {
    saySomething(name, isGreet);

    isGreet = !isGreet;
  }
};

saySomethingToEveryone(someList);

const addTwoNumbers = function (num1, num2) {
  return num1 + num2;
};

// Function parameters ? Boolean, Number, String, Objects, Functions, ...

// Is a function that takes in another function as a parameter (greetAction)
// Callbacks & Higher Order functions!

// Higher Order Function => A function that needs another function to work
// Callback => Relationship status, sayHi is THE callback of genericGreeting

const genericGreeting = function (listOfNames, greetAction) {
  for (const name of listOfNames) {
    greetAction(name);
  }
};

// Steps
// 1 - We receive listOfNames, we expect it to be an array of strings
// 2 - We receive greetAction, we expect it to be a function that will take one parameter
// 3 - For every name of listOfNames, I want to do the following steps
//    4 - We call greetAction with the parameter of name
// ... the end!

// what is greetAction? Not knowing is a problem?
// what is listOfNames? I don't know, hope that it's an array with strings (names)

console.log("---- calback test ----");

genericGreeting(["Libin", "Urvish"], sayHi);

// Assignement vs Reference

// Calling a function vs. Referencing a function

// Immediately invoked function expressions (IIFEs)
