function repeatEnd(str, n){
  let s = '';
  for(let i=0;i<n;i++)
    s+=str.substr(str.length-n,n);
  return s;
}