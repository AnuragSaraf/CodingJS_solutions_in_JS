function repeatSeparator(word, sep, count){
  let s = '';
  for(let i=0;i<count;i++){
    s+=word;
    if(i<count-1)
    s+=sep;
  }
  return s;
}