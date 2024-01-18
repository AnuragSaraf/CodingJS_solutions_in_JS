function changePi(str){
  if(str.length==0) return '';
  return str.substr(0,2)=='pi'?'3.14'+changePi(str.substr(2,str.length-2)):str[0]+changePi(str.substr(1,str.length-1));
}