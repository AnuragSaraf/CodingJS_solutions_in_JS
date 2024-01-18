function lastChars(a, b){
  if(a.length==0 && b.length==0) return '@@';
  return a.length==0 || b.length==0? (b==0?a[0]+'@':'@'+b[b.length-1]):a[0]+b[b.length-1];
}