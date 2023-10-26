const addNoodlesPromise = (time) => {
  const isSucess = Math.random() > 0.2;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSucess) {
        resolve("Thats a nice amount of noodles");
      } else {
        reject(new Error("Oh my god so many noodles"));
      }
    }, time);
  });
};

// addNoodlesPromise()
//   .then((message) => console.log(message))
//   .then(addNoodlesPromise)
//   .then((message) => console.log(message))
//   .then(addNoodlesPromise)
//   .then((message) => console.log(message))
//   .then(addNoodlesPromise)
//   .catch((error) => console.log(error));

Promise.all([addNoodlesPromise(2000), addNoodlesPromise(1000), addNoodlesPromise(5000)])
  .then((messageList) => console.log(messageList))
  .catch((error) => console.log("The promise that failed", error));

// Promise.race([addNoodlesPromise(2000), addNoodlesPromise(1000), addNoodlesPromise(5000)])
//   .then((message) => console.log(message))
//   .catch((error) => console.log("The promise that failed", error));
