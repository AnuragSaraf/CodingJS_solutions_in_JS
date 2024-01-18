function delDel(s){
  return s.substr(1,3)=="del"?(s[0]+s.substr(4,s.length-3)):s;
}