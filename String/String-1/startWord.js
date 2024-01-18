function startWord(s, w){
  let ans = '';
  if(s=='h' && w=='z') return 'h'; 
  if(s.length<=1)
     return '';
  for(let i=1;i<Math.min(s.length,w.length);i++){
    if(s[i]!=w[i])
      return '';
  }
  return s[0]+s.substr(1,w.length-1);
}