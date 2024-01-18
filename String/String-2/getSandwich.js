function getSandwich(str){
  let left=-1,right=str.length;
  for(let i=0;i<str.length-5;i++){
    if(str.substr(i,5)=='bread'){
      left = i;
      break;
    }
  }
  if(left==-1) return '';
  for(let i=right;i>=5;i--){
    if(str.substr(i-5,5)=='bread'){
      right=i-5;
      break;
    }
  }
  if(left==right)
     return '';
  return str.substr(left+5,right-left-5);
}