function frontTimes(str, n){
  let s = '';
  for(let i=0;i<n;i+=1)
    s+=str.substr(0,3);
  return s;
}