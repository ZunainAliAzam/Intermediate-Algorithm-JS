function translatePigLatin(str){
  let vowels = 'aeiou'
  for (let i=0;i<str.length;i++){
      let individualLetter=str[i]
      if (vowels.indexOf(individualLetter) != -1 && i===0){
        return str + 'way'
      }
      if(vowels.indexOf(individualLetter) != -1){
        return str.slice(i) + str.slice(0,i) + 'ay' 
      }
  }
  return str + "ay"
}

console.log(translatePigLatin("rhythym"))