function doubleX(str){
  let ct=0;
  for(let i=0;i<str.length;i+=1){
    if(str[i]=='x' && str.substr(i,2)!='xx')
      return false;
    if(str[i]=='x' && str.substr(i,2)=='xx')
      return true;
  }
  return false;
}