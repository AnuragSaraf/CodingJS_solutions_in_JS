function endUp(s){
  return s.length>3?s.substr(0,s.length-3)+s.substr(s.length-3,3).toUpperCase():s.toUpperCase();
}