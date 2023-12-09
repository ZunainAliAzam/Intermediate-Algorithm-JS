function myReplace(str, before, after) {
  let stringCollection = str.split(" ");
  for (let i = 0; i < stringCollection.length; i++) {
    if (stringCollection[i] === before) {
      // Check if the first letter of the word is uppercase
      if (stringCollection[i][0] === stringCollection[i][0].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
      } else {
        after = after.charAt(0).toLowerCase() + after.slice(1);
      }
      stringCollection[i] = after;
    }
  }
  return stringCollection.join(" ");
}

// Test cases
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
