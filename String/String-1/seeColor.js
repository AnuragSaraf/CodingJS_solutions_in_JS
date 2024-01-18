function seeColor(str){
  let s = '';
  if(str.substr(0,3)=='red') s+='red';
  if(str.substr(0,4)=='blue') s+='blue';
  return s;
}