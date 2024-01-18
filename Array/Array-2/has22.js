function has22(nums){
  for(let i=1;i<nums.length;i++)
     if(nums[i]==nums[i-1] && nums[i]==2)
       return true;
  return false;
}