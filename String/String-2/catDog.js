function catDog(str){
  let cat=0,dog=0;
  for(let i=0;i<str.length;i++){
    if(str.substr(i,3)=='cat')
      cat++;
    if(str.substr(i,3)=='dog')
      dog++;
  }
  return cat==dog;
}