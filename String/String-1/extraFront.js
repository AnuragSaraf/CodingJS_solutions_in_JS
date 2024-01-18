function extraFront(str){
  let n = Math.min(str.length,2)
  return str.substr(0,n)+str.substr(0,n)+str.substr(0,n);
}