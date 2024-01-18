function frontBack(s){
  return s.length<=1?s:s[s.length-1]+(s.substr(1,s.length-2))+s[0];
}