function countAbc(str){
  if(str.length<=1) return 0;
  return str.substr(0,3)=='aba' || str.substr(0,3)=='abc'?1+countAbc(str.substr(1,str.length)):countAbc(str.substr(1,str.length));
}