function nestParen(s){
  if(s.length==0) return true;
  
  return (s[0]=='(' &&  s[s.length-1]==')')?(nestParen(s.substr(1,s.length-2))):false);
}