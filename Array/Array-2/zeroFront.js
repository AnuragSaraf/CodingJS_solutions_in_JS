function zeroFront(nums){
  let arr = nums.sort()
  return nums[0]<0 ? arr.reverse():arr;
}