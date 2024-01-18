function endOther(a, b){
  let A = (a.length<=b.length?a:b).toLowerCase();
  let B = (b.length>=a.length?b:a).toLowerCase();
  
  return A==B.substr(B.length-A.length,A.length)
}