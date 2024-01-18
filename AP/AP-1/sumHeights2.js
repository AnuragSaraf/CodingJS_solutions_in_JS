function sumHeights2(heights, start, end){
  let s=0;
  for(let i=start+1;i<=end;i++){
    if(heights[i]>=heights[i-1])
      s+=2*Math.abs(heights[i]-heights[i-1]);
    else
      s+=Math.abs(heights[i]-heights[i-1]);
  }
  return s;
}