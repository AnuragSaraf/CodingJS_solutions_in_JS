function mixString(a, b){
  let s='';
  let i=0,j=0;
  while(i<a.length && j<b.length){
      if(i<a.length)
        s+=a[i++];
      if(j<b.length)
        s+=b[j++];
  }
  
  if(i<a.length) s+=a.substr(i,a.length-i);
  if(j<b.length) s+=b.substr(j,b.length-j);
  return s;
}