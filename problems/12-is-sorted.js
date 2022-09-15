/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

let isSorted = arr => {
  let result = true;
  let i = 0;
  while (i < arr.length) {
    if (arr.pop() > arr.slice(-1)) {
      result *= true;
    } else {
      result *= false;
    }
  }
  return result > 0;

}
// your code here

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
