function zipZap(str){
  let s = '';
  for(let i=0; i<str.length; i++){
    if(str[i]=='z' && str[i+2]=='p'){
        s+='zp';
        i+=2;
    }
    else
      s+=str[i];
  }
  return s;
}