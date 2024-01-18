function has77(nums){
  let sev=0;
  for(let i=2;i<nums.length;i++){
    if((nums[i]==nums[i-2] || nums[i]==nums[i-1]) && nums[i]==7)
      sev=1;
  }
  return sev==1 || (nums[0]==nums[1] && nums[0]==7);
}