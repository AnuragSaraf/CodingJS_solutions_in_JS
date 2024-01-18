function stringSplosion(str){
  let s='';
  for(let i=1;i<str.length;i+=1)
    s+=str.substr(0,i);
  return s;
}