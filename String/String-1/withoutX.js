function withoutX(s){
    if(s.length==0)return '';
  return (s[0]=='x'?'':s[0])+(s.substr(1,s.length-2)+(s[s.length-1]=='x'?'':s[s.length-1]));
}