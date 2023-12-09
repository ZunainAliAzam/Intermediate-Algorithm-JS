function steamrollArray(arr) {
  function flatten(element, result) {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        flatten(element[i], result);
      }
    } else {
      result.push(element);
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    flatten(arr[i], result);
  }

  return result;
}

// Example usage:
console.log(steamrollArray([[["a"]], [["b"]]]));