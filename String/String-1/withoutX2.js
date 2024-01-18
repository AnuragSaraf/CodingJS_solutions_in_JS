function withoutX2(s){
    if(s.length==0) return '';
    if(s.length==1 && s[0]=='x') return '';
  return (s[0]=='x'?'':s[0])+(s[1]=='x'?'':s[1])+s.substr(2,s.length-2);
}