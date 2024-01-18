function without2(str){
  if(str=='x') return 'x';
  return str.substr(0,2)==str.substr(str.length-2,2)?str.substr(2,str.length-2):str;
}