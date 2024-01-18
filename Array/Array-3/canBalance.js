function canBalance(nums){
  let su_c = 0, su = 0;
  for(let i=0;i<nums.length;i++)
    su_c+=nums[i];
  for(let j=0;j<nums.length;j++){
    su+=nums[j];
    if(su == su_c - su)
      return true;
  }
  return false;
}