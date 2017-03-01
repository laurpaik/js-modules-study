'use strict';

// we want to do some work in this function
// then return a module from it
const incrementX = function (initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `incrementor` will have access to variables in this scope, such as `a`
  const incrementor = function () {
    return a++;
  };

  // return the function so we can access it from outside
  return incrementor;
};

// we want to store our generated module in `countFromZero`
// `countFromZero` now contains `incrementor` from inside `incrementX`!
// so countFromZero initially sets a = 0 and then returns 1?
let countFromZero = incrementX(0);

// from here, use the module you've created
// run countFromZero 10 times
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = countFromZero();
  // log a = 9?
  // LOL jokes it logs each iteration of a, so 0 - 9
  // with each number on a new line
  console.log(messageToBeLogged);
}
