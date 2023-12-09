function sumFibs(num) {
  let fibbSeq = [0, 1];
  let counter = fibbSeq[fibbSeq.length - 2] + fibbSeq[fibbSeq.length - 1];

  while (counter <= num) {
    fibbSeq.push(counter);
    counter = fibbSeq[fibbSeq.length - 2] + fibbSeq[fibbSeq.length - 1];
  }

  let sumOfOddFibb = 0;

  for (let fibNum of fibbSeq) {
    if (fibNum % 2 !== 0) {
      sumOfOddFibb += fibNum;
    }
  }

  return sumOfOddFibb;
}

console.log(sumFibs(75025)); // Output: 135721
