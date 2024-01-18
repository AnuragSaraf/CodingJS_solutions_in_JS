function sum13(nums){
  let su=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]==13)
      i++;
    else su+=nums[i];
  }
  return su;
}