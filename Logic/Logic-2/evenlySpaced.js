function evenlySpaced(a, b, c){
  let la = Math.max(a,Math.max(b,c));
  let mi = Math.min(a,Math.min(b,c));
  let mid = a>mi && a<la?a: b>mi && b<la?b:c;
  return mid-mi==la-mid;
}