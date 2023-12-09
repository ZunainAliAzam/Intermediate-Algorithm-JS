function uniteUnique(...arrays) {
  let finalCollection = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (finalCollection.indexOf(arrays[i][j]) == -1) {
        finalCollection.push(arrays[i][j]);
      }
    }
  }

  return finalCollection;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
