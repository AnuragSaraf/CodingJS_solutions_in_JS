function pairStar(str){
  if(str.length==0) return '';
  if(str.length==1) return str[str.length-1];
  return (str[0]==str[1])?(str[0]+'*'+pairStar(str.substr(1,str.length-1))):str[0]+pairStar(str.substr(1,str.length-1);
}