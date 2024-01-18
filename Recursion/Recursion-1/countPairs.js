function countPairs(str){
  if(str.length<3) return 0;
  return str[0]==str[2]?1+countPairs(str.substr(1,str.length-1)):countPairs(str.substr(1,str.length-1);
}