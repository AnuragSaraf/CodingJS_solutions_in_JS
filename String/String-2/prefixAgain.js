function prefixAgain(str, n){
  let s = str.substr(0,n);
  for(let i=1;i<=str.length-n;i++){
    if(s==str.substr(i,n))
      return true;
  }
  return false;
}