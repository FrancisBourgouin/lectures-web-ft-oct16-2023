// Arrow functions =>
// class keyword

// Class components, homemade classes

// Javascript Classes

// To learn new things?
// Blueprint for objects

// Array.isArray();
// Object.keys();
// Object.values();

const newArray = new Array();

// newArray.push(), pop(), .length

class Potato {
  constructor(name, type) {
    // console.log(name, type);
    this.name = name;
    this.type = type || "a mystery";
  }

  isFresh = function () {
    return true;
  };

  greet = function () {
    console.log(`Hi! I am a potato, my name is ${this.name} and my type is ${this.type}`);
  };

  smash = function () {
    console.log(`Sploutch`);
  };
}

class SuperPotato extends Potato {
  constructor(name, type) {
    const newName = "Super " + name;
    super(newName, type);
  }

  smash = function () {
    console.log(`AHHHHH! *RUNS AWAY*`);
  };
}

const russett = new Potato("Potator", "Russett");
const yukonGold = new SuperPotato("Patata", "Yukon Gold");
const irishCobbler = new Potato("Inigo Montoya");

russett.greet();
yukonGold.greet();
irishCobbler.greet();

yukonGold.smash();

// Purpose of a class ?
