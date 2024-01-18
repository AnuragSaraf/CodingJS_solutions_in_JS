
function noTeenSum(a, b, c){
  let su=0;
  if(!fixTeen(a)) su+=a;
  if(!fixTeen(b)) su+=b;
  if(!fixTeen(c)) su+=c;
  return su;
}

function fixTeen(n){
  if(n>=13 && n<=19 && n!=15 && n!=16)
    return true;
  return false;
}
