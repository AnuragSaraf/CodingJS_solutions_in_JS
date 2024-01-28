function blueTicket(a, b, c){
  return a+b==10 || b+c==10 || c+a==10 ? 10: a+b==b+c+10 || a+b==a+c+10? 5: 0;
}