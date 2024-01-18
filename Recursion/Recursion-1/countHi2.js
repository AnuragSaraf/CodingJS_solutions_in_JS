function countHi2(s){
  if(s.length<2) return 0;
  return (s[0]=='h' && s[1]=='i')?(1+countHi2(s.substr(2,s.length-2))):(s[0]=='x'&&s[1]=='h'&&s[2]=='i'?countHi2(s.substr(3,s.length-3)):countHi2(s.substr(1,s.length-1)));
}