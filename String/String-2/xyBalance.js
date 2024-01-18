function xyBalance(str){
  for(let i=str.length-1;i>=0;i--){
    if(str[i]=='y')
      return true;
    if(str[i]=='x')
      return false;
  }
  return true;
}