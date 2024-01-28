function loneSum(a, b, c){
  return a==b && b==c?0: a==b? c: b==c?a: a==c?b: a+b+c;
}