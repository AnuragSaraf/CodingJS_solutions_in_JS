function countClumps(nums){
  let ct=0,t=0;
  for(let i=1;i<nums.length;i++){
    if(nums[i]==nums[i-1])
      t++;
    else{
      if(t>=1)
        ct++;
      t=0;
    }
  }
    if(t!=0) ct++;
  return ct;
}