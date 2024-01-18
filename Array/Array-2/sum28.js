function sum28(nums){
  let su=0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]==2)
      su+=2;
  }
  return su==8;
}