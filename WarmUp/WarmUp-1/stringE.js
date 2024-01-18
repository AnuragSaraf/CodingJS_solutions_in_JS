function stringE(s){
  let n = (s.split("e").length - 1);
  return n>=1 && n<=3;
}