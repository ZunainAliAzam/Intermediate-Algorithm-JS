function destroyer(arr, ...args) {
  // Use the filter method to create a new array with elements that do not match any of the args
  return arr.filter(element => !args.includes(element));
}

// Example usage:
let initialArray = [1, 2, 3, 1, 2, 3];
let resultArray = destroyer(initialArray, 2, 3);

console.log(resultArray);
// Output: [1, 1]
