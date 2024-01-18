function stringYak(str){
  let s='';
  for(let i=0;i<str.length;i++){
    if(str.substr(i,3)=='yak')
      i+=2;
    else
      s+=str[i];
  }
  return s;
}