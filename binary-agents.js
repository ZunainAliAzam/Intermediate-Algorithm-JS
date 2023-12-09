function binaryAgent(str) {
  let binaryData = str.split(" ")
  result = ""
  for(let i=0; i<binaryData.length;i++){
    let decimal= String.fromCharCode(parseInt(binaryData[i],2))
    result += decimal
  }
  return result;
}

let result = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(result)