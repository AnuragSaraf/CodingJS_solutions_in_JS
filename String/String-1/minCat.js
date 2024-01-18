function minCat(a, b){
  return (a.length==b.length)?(a+b):(a.length>b.length)?(a.substr(a.length-b.length,b.length)+b):a+b.substr(b.length-a.length,a.length);
}