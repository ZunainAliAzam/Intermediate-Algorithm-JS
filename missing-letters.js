function fearNotLetter(str){
  let alphabets = 'abcdefghijklmnopqrstuvwxyz'
  let startingPosition = alphabets.indexOf(str[0])
  console.log(startingPosition)
  let focusAlphabet=alphabets.slice(startingPosition)
  console.log(focusAlphabet)
  for(let i=0;i<str.length;i++){
    if(str[i]!=focusAlphabet[i]){
      return focusAlphabet[i];
    }
  }
}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));