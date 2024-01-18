function modThree(nums){
  for(let i=2;i<nums.length;i++){
    if((nums[i]%2==0 && nums[i-1]%2==0 && nums[i-2]%2==0) || (nums[i]%2!=0 && nums[i-1]%2!=0 && nums[i-2]%2!=0))
      return true;
  }
  return false;
}