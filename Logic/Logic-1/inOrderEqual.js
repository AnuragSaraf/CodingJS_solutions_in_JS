function inOrderEqual(a, b, c, equalOk){
  return equalOk?(a<=b && b<=c):(a<b && b<c);
}