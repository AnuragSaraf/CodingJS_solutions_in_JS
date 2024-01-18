function zeroMax(nums){
  let ma = -1000;
  let pos = -1;
  for(let i=nums.length-1;i>=0;i--){
    if(nums[i]%2!=0 && ma<nums[i]){
      ma = nums[i];
      pos = i;
    }
    
    if(nums[i]==0 && pos!=-1){
      nums[i]= nums[pos];
    }
  }
  return nums;
}