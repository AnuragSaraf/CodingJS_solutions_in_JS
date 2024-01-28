function countCode(str){
  let a='c',b='o',c='e',ct=0;
  for(let i=0;i<str.length-3;i++){
    if(str[i]==a && str[i+1]==b && str[i+3]==c)
      ct++;
  }
  return ct;
}