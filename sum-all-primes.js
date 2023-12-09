function sumPrimes(limit) {
  let sum = 0;

  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) {
      sum += num;
    }
  }
  return sum;
}

// Function to check if a number is prime
function isPrime(num) {
  for (let i = 2; i <= num/2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

const result = sumPrimes(4);
console.log(result);
