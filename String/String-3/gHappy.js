function gHappy(str){
  if((str[0]=='g' && str[1]!='g') || (str[str.length-1]=='g' && str[str.length-2]!='g')) return false;
  for(let i=1;i<str.length-1;i++)
     if(str[i]=='g' && str[i-1]!='g' && str[i+1]!='g')
       return false;
  return true;
}