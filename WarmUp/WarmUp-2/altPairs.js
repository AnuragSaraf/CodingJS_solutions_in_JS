function altPairs(str){
  let s='';
  for(let i=0;i<str.length;i+=4){
    s+=str[i];
    if(i+1<str.length)
    s+=str[i+1];
  }
  return s;
}