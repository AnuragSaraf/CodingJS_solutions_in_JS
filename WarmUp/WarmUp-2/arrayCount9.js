function arrayCount9(nums){
  let ct=0;
  for(let i=0;i<nums.length;i+=1)
    if(nums[i]==9)
      ct+=1;
  return ct;
}