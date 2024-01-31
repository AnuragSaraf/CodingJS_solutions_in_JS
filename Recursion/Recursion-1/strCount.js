function strCount(str, sub){
  if(str.length<sub.length) return 0;
  return str.substr(0,sub.length)==sub ? 1+strCount(str.substr(sub.length,str.length),sub):strCount(str.substr(1,str.length),sub);
}