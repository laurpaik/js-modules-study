'use strict';

// we want to do some work in this function
// then return a module from it

let countFromZero = (function (initialValue) {
  // declare some variables in here that will be hidden from outside
  let a = initialValue;

  // `incrementor` will have access to variables in this scope, such as `a`
  const incrementor = function () {
    return a++;
  };

  // return the function so we can access it from outside
  return incrementor;
});

// from here, use the module you've created
for (let index = 0; index < 10; index++) {
  let messageToBeLogged = countFromZero();
  console.log(messageToBeLogged);
}

// this code is more condensed than the code on the master
// the return value after the for loop in this version
// looks like those times I messed up
// using module.exports way back when (imagine that ....... )
// #tbt to when Bernard helped me in the game project issue #418
