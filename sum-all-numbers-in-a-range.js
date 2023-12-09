function sumAll(arr) {
  let minNum = Math.min(arr[0],arr[1])
  let maxNum = Math.max(arr[0],arr[1])
  let result = 0

  for (let i= minNum; i<= maxNum; i++){
    result += i;
  }
  return result;
}

console.log(sumAll([4, 1]));