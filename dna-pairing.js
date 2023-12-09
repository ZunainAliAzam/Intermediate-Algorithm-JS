function pairElement(str) {
  function basePairs(initial){
    for(let i=0;i<initial.length;i++){
      if(initial[i] == "A"){
        return "T"
      }else if(initial[i] == "T"){
        return "A"
      }else if(initial[i] == "C"){
        return "G"
      }else if(initial[i] == "G"){
        return "C"
      }
    }
  }
  return str.split("").map(str=>{
    let pair=[str, basePairs(str)]
    return pair
  });
}

console.log(pairElement("GCG"));