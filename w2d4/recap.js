const asyncPromiseQuestionMark = () => {
  return new Promise((resolve) => {
    resolve("Hello again!");
  });
};

// console.log("Hello!");

// asyncPromiseQuestionMark().then(console.log);

// console.log("Ok bye now");

console.log("Hello!");
asyncPromiseQuestionMark()
  .then(console.log)
  .then(() => console.log("Ok bye now"));

// Callbacks vs Promises ?
// Proper error handling / sucess structure (promises)
// Less nesting (promises)
// Callbacks can be sync or async, promises always async
// Promises has methods for multiple promises or a race for promises

// Should we always have a .catch() method when using promises? YES
