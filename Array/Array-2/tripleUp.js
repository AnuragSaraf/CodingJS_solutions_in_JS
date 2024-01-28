function tripleUp(nums){
  for(let i=2;i<nums.length;i++)
    if(nums[i]==nums[i-1]+1 && nums[i-1]==nums[i-2]+1)
      return true;
  return false;
}