function array667(nums){
  let ct=0;
  if(nums.length==0)
     return 0;
  for(let i=1;i<nums.length;i++){
    if((nums[i]==6 || nums[i]==7) && nums[i-1]==6)
      ct+=1;
  }
  return ct;
}