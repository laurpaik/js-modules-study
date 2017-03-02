'use strict';

// we want to do some work in this function
// then return a module from it
const incrementX = function (initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `incrementor` will have access to variables in this scope, such as `a`
  const incrementor = function () {
    // make the module more interesting
    return `${--a} bottles of beer on the wall, ${a} bottles of beer, take one down, pass it around, ${a-1} bottles of beer on the wall`;
  };

  // return the function so we can access it from outside
  return incrementor;
};

// we want to store our generated module in `countFromZero`
// `countFromZero` now contains `incrementor` from inside `incrementX`!
// so countFromZero initially sets a = 0 and then returns 1?
let countDown = incrementX(11);

// from here, use the module you've created
// run countDown 10 times
for (let index = 10; index > 0; index--) {
  let messageToBeLogged = countDown();
  // logs an old song
  console.log(messageToBeLogged);
}
console.log('no more bottles of beer on the wall');
