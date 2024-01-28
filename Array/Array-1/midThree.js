function midThree(nums){
  let a = nums[((nums.length-1)/2)-1], b = nums[(nums.length-1)/2)], c = nums[((nums.length-1)/2)+1];
  return [a,b,c];
}