function countTriple(str){
  let ans=0;
  let ct=1;
  for(let i=1;i<str.length;i++){
    if(str[i]==str[i-1])
      ct++;
    else
      ct=1;
    if(ct>=3)
      ans++;
  }
  return ans;
}