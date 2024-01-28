function twoTwo(nums){
  if(nums[0]==2 && nums[1]!=nums[0]) return false;
  for(let i=1;i<nums.length;i++)
    if(nums[i]==2 && nums[i]!=nums[i-1] && nums[i]!=nums[i+1])
      return false;
  return true;
}