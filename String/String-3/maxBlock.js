function maxBlock(str){
  let ans=0, ct=1;
    if(str.length==0) return 0;
  for(let i=1; i<str.length; i++){
    if(str[i]==str[i-1]){
      ct++;
    }
    else{
      ans = Math.max(ans,ct);
      ct=1;
    }
  }
  return Math.max(ans,ct);
}