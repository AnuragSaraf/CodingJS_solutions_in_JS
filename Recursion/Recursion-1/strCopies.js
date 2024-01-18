function strCopies(str, sub, n){
  if(n==0) return true;
  if(str.length==0) return false;
  return str.substr(0,sub.length)==sub?strCopies(str.substr(1,str.length-1),sub,n-1):strCopies(str.substr(1,str.length-1),sub,n);
}