function stringX(str){
  let s='';
  for(let i=0;i<str.length;i++)
    if(i==0 || i==str.length-1 || str[i]!='x')
      s+=str[i];
  if(s.length==1)
    s+='x';
  return s;
}