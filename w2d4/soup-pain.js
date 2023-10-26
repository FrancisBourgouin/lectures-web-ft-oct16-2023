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
const addVeggies = (nextStep) => {
  const isSuccess = Math.random() > 0.1;

  setTimeout(() => {
    if (isSuccess) {
      nextStep(null, "That's some nice veggies");
    } else {
      nextStep("overflow", "Oh no, way too much!");
    }
  }, 2000);
};
const addNoodles = (nextStep) => {
  const isSuccess = Math.random() > 0.1;

  setTimeout(() => {
    if (isSuccess) {
      nextStep(null, "That's some nice noodles");
    } else {
      nextStep("overflow", "Oh no, not enough noodles :(");
    }
  }, 2000);
};
const addEggs = (nextStep) => {
  const isSuccess = Math.random() > 0.1;

  setTimeout(() => {
    if (isSuccess) {
      nextStep(null, "That's some nice eggs");
    } else {
      nextStep("overflow", "Oh no, what kind of eggs is this?");
    }
  }, 2000);
};

boilBroth((err, message) => {
  console.log(message);
  if (err) {
    return console.log("err", err);
  }
  addVeggies((err, message) => {
    console.log(message);
    if (err) {
      return console.log("err", err);
    }
    addNoodles((err, message) => {
      console.log(message);
      if (err) {
        return console.log("err", err);
      }
      addEggs((err, message) => {
        console.log(message);
        if (err) {
          return console.log("err", err);
        }
        console.log("The soup is all done!");
      });
    });
  });
});
