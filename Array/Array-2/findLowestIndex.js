function findLowestIndex(nums){
  let mi = Number.MAX_SAFE_INTEGER;
  let pos = -1;
  for(let i=0;i<nums.length;i++){
    if(mi>nums[i]){
      pos=i;
      mi = nums[i];
    }
  }
  return pos;
}