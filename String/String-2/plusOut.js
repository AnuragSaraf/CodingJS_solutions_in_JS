function plusOut(str, word){
  let s = '';
  for(let i=0; i<str.length; i++){
    if(str.substr(i,word.length)==word){
      s+=word;
      i+=word.length-1
    }
    else{
      s+='+'
    }
  }
  return s;
}