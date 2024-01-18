function count11(str){
  if(str.length<=1) return 0;
  return (str[0]==1 && str[1]==1)?(1+count11(str.substr(2,str.length-2))):count11(str.substr(1,str.length-1));
}