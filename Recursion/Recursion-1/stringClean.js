function stringClean(str){
  if(str.length==0) return '';
  return str[0]==str[1]?stringClean(str.substr(1,str.length)):str[0]+stringClean(str.substr(1,str.length));
}