function mirrorEnds(s){
  if(s[0]!=s[s.length-1]) return '';
  for(let i=0;i<s.length/2;i++){
    if(s[i]!=s[s.length-i-1])
      return s.substr(0,i);
  }
  return s;
}