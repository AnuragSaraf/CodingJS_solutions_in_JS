function has12(nums){
  for(let i=0;i<nums.length;i++){
    if(nums[i]==1)
      for(let j=i+1;j<nums.length;j++)
        if(nums[j]==2)
          return true;
  }
  return false;
}