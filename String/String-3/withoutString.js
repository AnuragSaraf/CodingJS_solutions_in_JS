function withoutString(base, remove) {
  let s='';
  for(let i=0; i<base.length; i++){
    if(base.substr(i,remove.length).toLowerCase()==remove.toLowerCase())
       i+=remove.length-1
    else
       s+=base[i];
  }
  return s;
}