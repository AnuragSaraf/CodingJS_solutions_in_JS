function sumNumbers(str){
  let s='';
  let su = 0;
  for(let i=0;i<str.length;i++){
    if(str[i]!=' ' && (Number)(str[i]-'0')>=0 && (Number)(str[i]-'0')<=9)
      s+=str[i];
    else{
      su+=(Number)(s);
      s="";
    }
  }
  if(s!="")
    su+=(Number)(s);
  return su;
}