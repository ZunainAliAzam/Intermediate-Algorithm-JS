function smallestCommons(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);

  // Function to find the GCD of two numbers using Euclidean algorithm
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  // Function to find the LCM of two numbers
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }

  // Initialize result to the first number in the range
  let result = arr[0];

  // Iterate through the range and find the LCM of each number with the result
  for (let i = arr[0] + 1; i <= arr[1]; i++) {
    result = lcm(result, i);
  }

  return result;
}

console.log(smallestCommons([1, 3])); // Output: 6