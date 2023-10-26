// Errors !

const bob = "Pequeno Pollo";

try {
  bob = "Little Chicken";
  // Node: (╯°□°）╯︵ ┻━┻
} catch (error) {
  console.log("Woops, you did something that Node didn't like");
}

// Unhandled Exception => Throwing an error => Uncaught

console.log("🐔");

setTimeout(() => {
  try {
    bob = "Little Chicken";
  } catch (error) {
    console.log("Oh no. :(");
  }
}, 2000);
