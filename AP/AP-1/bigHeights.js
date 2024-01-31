function bigHeights(heights, start, end){
  let ct=0;
  for(let i=start+1;i<=end;i++)
    if(Math.abs(heights[i]-heights[i-1])>=5)
      ct++;
  return ct;
}