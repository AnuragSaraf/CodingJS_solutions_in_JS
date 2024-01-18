function posNeg(a, b, negative){
  return negative?(a<0 && b<0):((a<0)^(b<0))==1;
}