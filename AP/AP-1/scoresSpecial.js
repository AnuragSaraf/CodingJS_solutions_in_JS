
function scoresSpecial(a, b){
  let x = (largestSpecialScore(a)+largestSpecialScore(b));
  return x;
}

function largestSpecialScore(li){
  
  var ma = 0;
  
  for(let i=0;i<li.length;i++)
    if(li[i]%10==0)
      ma = Math.max(ma,li[i]);
  
  
  return ma;
}
