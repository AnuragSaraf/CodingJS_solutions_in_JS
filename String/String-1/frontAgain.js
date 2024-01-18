function frontAgain(s){
  if(s.length==0) return false;
  return (s[0]==s[s.length-2])&&(s[1]==s[s.length-1]);
}