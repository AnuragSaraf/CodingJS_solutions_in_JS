function everyNth(str, n){
  let s='';
  for(let i=0;i<str.length;i+=n)
    s+=str[i];
  return s;
}