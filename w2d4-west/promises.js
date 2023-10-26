// Promises!

const boilBroth = (successAction, failAction) => {
  const isSucess = Math.random() > 0.5;

  if (isSucess) {
    successAction("Thats a nice rolling boil there.");
  } else {
    failAction("It burned and stuck to the bottom");
  }
};

// boilBroth(
//   (message) => console.log("Yay!", message),
//   (message) => console.log("Oh no :(", message)
// );

// Promises!
// Always about the future, fulfill, break

const boilBrothPromise = () => {
  const isSucess = Math.random() > 0.1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSucess) {
        resolve("Thats a nice rolling boil there.");
      } else {
        reject(new Error("It burned and stuck to the bottom"));
      }
    }, 2000);
  });
};
const addNoodlesPromise = () => {
  const isSucess = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSucess) {
        resolve("Thats a nice amount of noodles");
      } else {
        reject(new Error("Oh my god so many noodles"));
      }
    }, 2000);
  });
};

const reportBack = (message) => console.log("Report:", message);

boilBrothPromise()
  .then(reportBack)
  .then(addNoodlesPromise)
  .then(reportBack)
  .then(() => {
    console.log("EVEN MORE NOODLES!");
    return addNoodlesPromise();
  })
  .then(reportBack)
  .catch((error) => console.log(error.message))
  // .catch(reportBack)
  .finally(() => console.log("Our kitchen time is over"));
