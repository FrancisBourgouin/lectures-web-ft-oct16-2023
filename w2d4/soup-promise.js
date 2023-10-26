const boilBrothPromise = () => {
  const isSuccess = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("That's a nice rolling boil");
      } else {
        reject("Oh no, it overflowed everywhere");
      }
    }, 1000);
  });
};

const addNoodlesPromise = () => {
  const isSuccess = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Just the right amount *chef kiss*");
      } else {
        reject("That's way too much noodle");
      }
    }, 1000);
  });
};
const addVeggiesPromise = () => {
  const isSuccess = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Just the right amount of veggies *chef kiss*");
      } else {
        reject("That's way too much veggies");
      }
    }, 1000);
  });
};
const addEggsPromise = () => {
  const isSuccess = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("Just the right amount of egg *chef kiss*");
      } else {
        reject("That's way too much eggs :(");
      }
    }, 1000);
  });
};

const handleError = (err) => {
  // ...
};
const handleSuccess = (message) => {
  // ...
};

boilBrothPromise() // Return a then or a catch
  // .catch(console.log)
  .then((message) => console.log(message))
  .then(addNoodlesPromise) // Returns a then
  .then((message) => console.log(message))
  .then(addVeggiesPromise) // Returns a then
  .then((message) => console.log(message))
  .then((message) => {
    console.log(message);
    return addEggsPromise();
  })
  .then(() => console.log("Soup is ready!"))
  .catch((err) => console.log(err));
