function addTogether() {
  let firstArg = arguments[0];

  function checkArgument(argument) {
    if (typeof argument === "number") {
      return argument;
    } else {
      return undefined;
    }
  }

  function checkArgIfValidThenAdd(first, second) {
    if (checkArgument(first) === undefined || checkArgument(second) === undefined) {
      return undefined;
    } else {
      return first + second;
    }
  }

  if (arguments.length > 1) {
    let secondArg = arguments[1];
    return checkArgIfValidThenAdd(firstArg, secondArg);
  } else if (arguments.length === 1) {
    if (checkArgument(firstArg) === undefined) {
      return undefined;
    } else {
      return function (secondArg) {
        return checkArgIfValidThenAdd(firstArg, secondArg);
      };
    }
  }
}

// Example usage:
console.log(addTogether(2, 3)); // Output: 5
console.log(addTogether(2)(3)); // Output: 5
console.log(addTogether(2, '3')); // Output: undefined
