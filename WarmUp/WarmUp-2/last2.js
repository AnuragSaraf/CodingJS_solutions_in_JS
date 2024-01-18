function last2(s){
  let ct=0;
  for(let i=0;i<s.length-2;i+=1)
    if(s.substr(i,2)==s[s.length-2]+s[s.length-1])
      ct+=1;
  return ct;
}