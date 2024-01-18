function arrayFront9(nums){
  for(let i=0;i<Math.min(nums.length,4);i+=1)
    if(nums[i]==9)
      return true;
  return false;
}