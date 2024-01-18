function bigDiff(nums){
  let mi=Number.MAX_SAFE_INTEGER,pos_i=0;
  let ma=Number.MIN_SAFE_INTEGER,pos_j=0;
  for(let i=0;i<nums.length;i++){
    if(mi>nums[i]){
      mi = nums[i];
    }
    if(ma<nums[i]){
      ma = nums[i];
    }
  }
  return ma-mi;
}