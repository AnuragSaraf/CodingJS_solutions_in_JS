function repeatFront(str, n){
  let s = '';
  for(let i=n; i>0; i--){
    s+=str.substr(0,i);
  }
  return s;
}