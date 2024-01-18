function sameEnds(nums, len){
  for(let i=0;i<len;i++){
    if(nums[i]!=nums[nums.length-i]){
      return false;
    }
  }
  return true;
}