function fix34(nums){
  for(let i=0;i<nums.length;i++){
    if(nums[i]==3){
      for(let j=0;j<nums.length;j++){
        if(nums[j]==4 && nums[j-1]!=3){
          [nums[i+1],nums[j]] = [nums[j], nums[i+1]];
          break;
        }
      }
    }
  }
  return nums;
}