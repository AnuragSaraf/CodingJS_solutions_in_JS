function more14(nums){
  let ct1=0,ct4=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]==1)
      ct1++;
    if(nums[i]==4)
      ct4++;
  }
  return ct1>ct4;
}