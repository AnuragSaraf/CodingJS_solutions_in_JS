function conCat(a, b){
  return a[a.length-1]==b[0]?(a+b.substr(1,b.length-1)):a+b;
}