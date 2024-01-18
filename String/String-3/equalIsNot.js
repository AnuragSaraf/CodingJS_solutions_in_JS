function equalIsNot(str){
  let s=0,not=0;
  for(let i=0;i<str.length;i++){
    if(str.substr(i,2)=='is')
      s++;
    if(str.substr(i,3)=='not'){
      not++;
    }
  }
  return s==not;
}