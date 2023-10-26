// Making soup!

// boilBroth
// addNoodles
// addVeggies
// addEggs

const boilBroth = (nextStepAction) => {
  const success = Math.random();

  if (success > 0.8) {
    nextStepAction(null, "Thats a nice rolling boil there.");
  } else if (success > 0.5) {
    nextStepAction(null, "");
  } else {
    nextStepAction("It burned and stuck to the bottom", null);
  }
};

const boilBrothBANISHTHEELSES = (nextStepAction) => {
  const success = Math.random();

  if (success > 0.8) {
    return nextStepAction(null, "Thats a nice rolling boil there.");
  }

  if (success > 0.5) {
    return nextStepAction(null, "");
  }

  return nextStepAction("It burned and stuck to the bottom", null);
};

const addNoodles = (nextStepAction) => {
  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    console.log("Thats a great amount of noodles!");
  } else {
    console.log("It's overflowing everywhere now :(");
  }
};

const addNoodlesBANISHTHEELSE = (nextStepAction) => {
  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    return console.log("Thats a great amount of noodles!");
  }

  return console.log("It's overflowing everywhere now :(");
};

boilBroth((err, data) => {
  if (err) {
    return console.log(err);
  }

  if (!data) {
    addNoodles((err, data) => {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    });
    return console.log("That's a broth, I guess");
  }

  addNoodles((err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log(data);
  });
  return console.log(data);
});

// Err, Data
// Err, Status, Data
// boilBroth();
// addNoodles();

const someFunctionThatWillUseACallback = (action) => {
  action(5, 7);
};

const addTwoNumbers = (a, b) => a + b;

someFunctionThatWillUseACallback(addTwoNumbers);
