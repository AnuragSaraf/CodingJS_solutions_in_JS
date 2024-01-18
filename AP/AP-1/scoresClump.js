function scoresClump(scores){
  for(let i=2;i<scores.length;i++)
    if(scores[i]-scores[i-1]<=2 && scores[i]-scores[i-2]<=2)
      return true;
  return false;
}