function maxTriple(nums){
  let n = Math.floor(nums.length/2);
  return Math.max(nums[0],Math.max(nums[n],nums[nums.length-1]));
}