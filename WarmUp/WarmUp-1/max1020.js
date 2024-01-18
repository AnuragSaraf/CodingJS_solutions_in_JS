function max1020(a, b){
  return Math.max(a,b)>=10 && Math.max(a,b)<=20?Math.max(a,b):(Math.min(a,b)>=10 && Math.min(a,b)<=20?Math.min(a,b):0);
}