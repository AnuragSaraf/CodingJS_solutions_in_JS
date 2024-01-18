function swapEnds(nums){
  let n = nums.length;
  [nums[0],nums[n-1]]=[nums[n-1],nums[0]];
  return nums;
}