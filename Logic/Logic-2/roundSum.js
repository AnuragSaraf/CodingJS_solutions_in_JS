function roundSum(a, b, c){
  return round10(a)+round10(b)+round10(c);
}

function round10(num){
  return num%10>=5?num+10-num%10: num-num%10;
}