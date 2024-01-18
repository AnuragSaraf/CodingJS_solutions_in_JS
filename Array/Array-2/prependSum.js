function prependSum(nums){
  let li=[]
  li.push(nums[0]+nums[1])
  for(let i=2;i<nums.length;i++){
    li.push(nums[i])
  }
  return li;
}