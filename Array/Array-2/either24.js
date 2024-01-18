function either24(nums){
  let two=0,four=0;
  for(let i=1;i<nums.length;i++){
    if(nums[i]==nums[i-1] && nums[i]==2)
      two = 1;
    if(nums[i]==nums[i-1] && nums[i]==4)
      four = 1;
  }
  return (two==1^four==1)==1
}