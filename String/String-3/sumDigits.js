function sumDigits(str){
  let su=0;
  for(let i=0;i<str.length;i++){
    if((Number)(str[i]-'0')>=0 && (Number)(str[i]-'0')<=9)
      su+=(Number)(str[i]-'0');
  }
  return su;
}