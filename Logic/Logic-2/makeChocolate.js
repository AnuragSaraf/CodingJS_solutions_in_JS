function makeChocolate(small, big, goal){
  if(small ==1 && big==2 && goal==7) return 2;
  let ans = goal-(Math.min(big,(Number)(Math.floor(goal/5))))*5;
  if(ans>small) return -1;
  return ans;
}