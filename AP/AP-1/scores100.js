function scores100(scores){
  for(let i=1;i<scores.length;i++){
    if(scores[i]==100 && scores[i-1]==scores[i]){
      return true;
    }
  }
  return false;
}