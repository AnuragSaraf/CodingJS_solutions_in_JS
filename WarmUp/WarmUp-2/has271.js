function has271(nums){
  for(let i=0;i<=nums.length;i++)
     if(nums[i]==2 && nums[i+1]==7 && nums[i+2]==1)
       return true;
  return false;
}