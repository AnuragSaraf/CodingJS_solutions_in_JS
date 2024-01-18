function lessBy10(a, b, c){
  return Math.max(a,Math.max(b,c)) - Math.min(a,Math.min(b,c))>=10;
}