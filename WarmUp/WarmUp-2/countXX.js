function countXX(str){
  let ct=0;
  for(let i=0;i<str.length;i+=1)
    if(str.substr(i,2)=='xx')
      ct++;
  return ct;
}