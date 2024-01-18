function blackjack(a, b){
  return a>b?(a<=21?a:(b<21?b:0)):(b<=21?b:(a<21?a:0));
}