/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
let flatten = arr => {
  // cycle through an array
  // if the value isn't an array. push the value to new array
  // if the value is an array, call flatten
  // return new array

  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    let val = arr[i]
    if (Array.isArray(val)) {
      return newArr.concat(flatten(val))
    } else {
      newArr.push(val)
    }
  }
  return newArr
}

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3, 4, 5]]])); // [1, 2, 3]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
