function linearIn(outer, inner){
  let i=0,j=0;
  while(i<outer.length && j<inner.length){
    if(outer[i]==inner[j]){
      i++;j++;
    }
    else if(outer[i]<inner[j])
      i++;
    else if(outer[i]>inner[j])
      return false;
  }
  if(j==inner.length)
    return true;
  return false;
}