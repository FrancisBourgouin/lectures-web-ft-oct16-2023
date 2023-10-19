// Existential questions!

//

// Looping!

const someList = ["Dylan", "Justin", "Todd", "Urvish", "Ekaterina"];

for (let i = 0; i < someList.length; i++) {
  const name = someList[i];

  // console.log(`We have the name ${name} at position ${i}`);
}

// For the values of an array
for (const name of someList) {
  // console.log(`We have the name ${name} at position :(`);
}

// For the keys in an object
for (const index in someList) {
  const name = someList[index];

  // console.log(`We have the name ${name} at position ${index}`);
}

// Functions!

someFunction();

// Function definition
// Will get hoisted
function someFunction() {
  console.log("AH YEAH");
}
// function someFunction() {
//   console.log("MWAHAHAHAHAHAHAHAH");
// }

// Function expression
const someOtherFunction = function () {
  console.log("AH YEAH AGAIN");
};

// const someOtherFunction = function () {
//   console.log("AH YEAH AGAIN");
// };

// Arrow functions!

const someArrowFunction = () => {
  console.log("ARROW YEAH !");
};

const someArrowFunctionOne = () => console.log("WOOHOO!");
