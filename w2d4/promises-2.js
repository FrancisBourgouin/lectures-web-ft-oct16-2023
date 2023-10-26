// Promise all

// const obj1 = new Object()
// Object.values(...)

const promise1 = Promise.resolve("Promise 1");
const promise2 = Promise.reject("Promise 2");
const promise3 = Promise.reject("Promise 3");
const promise4 = Promise.resolve("Promise 4");

console.log(promise1, promise2);

Promise.all([promise1, promise2, promise3, promise4])
  .then((results) => console.log(results))
  .catch((errors) => console.log(errors));

// Promise race
// A race for the fastest promise
// CDN

const slowRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
    }, 2000);
  });
};
const fastRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
    }, 1000);
  });
};

Promise.race([slowRequest(), fastRequest()])
  .then((results) => console.log(results))
  .catch((errors) => console.log(errors));
