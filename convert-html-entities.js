function htmlEntities(str){
    for(let i=0; i<str.length;i++){
      if(str=='&'){
        return "&amp;";
      }else if(str=='<'){
        return "&lt;";
      }else if(str=='>'){
        return "&gt;";
      }else if(str=='"'){
        return "&quot;";
      }else if(str=="'"){
        return "&apos;";
      }
    }
  }
function convertHTML(str) {
  let charactersToCheck= ['&', '<', '>', '"', "'"]
  for(let i=0; i<str.length;i++){
    if(charactersToCheck.indexOf(str[i]) != -1){
      str=str.slice(0,i) + htmlEntities(str[i]) + str.slice(i+1)
    }
  }
  return str;
}

console.log(convertHTML("Dolce & Gabbana"));