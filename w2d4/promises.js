// Promises!

// Commitment
// To do what you say you'll do
// Promises can be resolved, or they can be broken

// Promise something
// then if it's succesfull ..
// catch if it fails
// finally we will have a resolution

const functionThatReturnsAPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        return resolve("Great success");
      } else {
        return reject("Epic fail");
      }
    }, 2000);
  });
};

const setIntervalId = setInterval(() => {
  console.log("🥔");
}, 500);

functionThatReturnsAPromise()
  .then((message) => console.log(message))
  .catch((err) => console.log(err))
  .finally(() => clearInterval(setIntervalId));
