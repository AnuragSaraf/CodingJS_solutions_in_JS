function changeXY(str){
  if(str.length==0) return '';
  return str[0]=='x'?'y'+changeXY(str.substr(1,str.length)):str[0]+changeXY(str.substr(1,str.length));
}