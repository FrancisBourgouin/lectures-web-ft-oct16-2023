// Making soup!

// boilBroth
// addNoodles
// addVeggies
// addEggs

const boilBroth = (nextStep) => {
  const isSuccess = Math.random() > 0.1;

  setTimeout(() => {
    if (isSuccess) {
      nextStep(null, "That's a nice rolling boil");
    } else {
      nextStep("overflow", "Oh no, it overflowed everywhere");
    }
  }, 2000);
};

const addNoodles = (nextStep) => {
  const isSuccess = Math.random() > 0.5;

  setTimeout(() => {
    if (isSuccess) {
      nextStep(null, "Just the right amount *chef kiss*");
    } else {
      nextStep("toomuch", "That's way too much noodle");
    }
  }, 2000);
};

// const

boilBroth((err, message) => {
  console.log(message);
  if (err) {
    return console.log("Error type", err);
  }
  addNoodles((err, message) => {
    console.log(message);
    if (err) {
      return console.log("Error type", err);
    }
    // ...
  });
});

// Instead of (err, message), what if we had two different callbacks?

const boilBrothV2 = (successStep, failStep) => {
  const isSuccess = Math.random() > 0.1;

  setTimeout(() => {
    if (isSuccess) {
      successStep("That's a nice rolling boil");
    } else {
      failStep("Oh no, it overflowed everywhere");
    }
  }, 2000);
};

boilBrothV2(
  (message) => {
    // ....
  },
  (message) => {
    // ....
  }
);
