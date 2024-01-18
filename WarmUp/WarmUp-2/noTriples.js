function noTriples(nums){
  let ct=0;
  for(let i=1;i<nums.length;i++){
    if(nums[i]==nums[i-1]){
      ct++;
      if(ct>=2)  return false;
    }
    else
      ct=0;
  }
  return true;
}