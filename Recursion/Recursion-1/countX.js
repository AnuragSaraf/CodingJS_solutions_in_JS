function countX(str){
  if(str.length==0) return 0;
  return str[0]=='x'?1+countX(str.substr(1,str.length)):countX(str.substr(1,str.length));
}