/* We want to create a function, which returns an array of functions, which return their index in the array.

For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3
*/

function createFunctions(n) {
  let callbacks = [];

  for (let index = 0; index < n; index++) {
    callbacks.push(function () {
      return index;
    });
  }

  return callbacks;
}

const callbacks = createFunctions(5);

for (let index = 0; index < callbacks.n; index++) {
  console.log(callbacks[index](), index, "Function with index " + index);
}
